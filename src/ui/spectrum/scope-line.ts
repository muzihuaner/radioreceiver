import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import {
  DefaultFftSize,
  DefaultMinDecibels,
  DefaultMaxDecibels,
} from "./common";
import { SpectrumTapEvent } from "./events";
import {
  type Zoom,
  DefaultZoom,
  getSampleWindow,
  getUnzoomedFraction,
  SampleWindow,
} from "./zoom";

@customElement("rr-scope-line")
export class RrScopeLine extends LitElement {
  @property({ type: Number, reflect: true, attribute: "min-decibels" })
  minDecibels: number = DefaultMinDecibels;
  @property({ type: Number, reflect: true, attribute: "max-decibels" })
  maxDecibels: number = DefaultMaxDecibels;
  @property({ attribute: false })
  zoom: Zoom = DefaultZoom;

  static get styles() {
    return [
      css`
        #scope {
          color: var(--rr-scope-color, yellow);
          width: 100%;
          height: 100%;
        }
      `,
    ];
  }

  render() {
    return html`<canvas id="scope"></canvas>`;
  }

  private spectrum: Float32Array = new Float32Array(DefaultFftSize);
  private width: number = DefaultFftSize;
  private sampleWindow: SampleWindow = getSampleWindow(
    this.spectrum.length,
    this.width,
    this.zoom
  );
  @query("#scope") canvas?: HTMLCanvasElement;
  private context?: CanvasRenderingContext2D | null;

  constructor() {
    super();
    this.addEventListener("click", (e) => this.onClick(e));
  }

  addFloatSpectrum(spectrum: Float32Array) {
    if (this.spectrum.length != spectrum.length) {
      this.spectrum = new Float32Array(spectrum.length);
      this.sampleWindow = getSampleWindow(
        this.spectrum.length,
        this.width,
        this.zoom
      );
    }
    this.spectrum.set(spectrum);
    this.redraw();
  }

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    if (!changed.has("zoom")) return;
    this.sampleWindow = getSampleWindow(
      this.spectrum.length,
      this.width,
      this.zoom
    );
    this.redraw();
  }

  private redraw() {
    let ctx = this.getContext();
    if (!ctx) return;

    const l = this.spectrum.length;

    const width = ctx.canvas.offsetWidth;
    const height = ctx.canvas.offsetHeight;
    if (ctx.canvas.width != width) ctx.canvas.width = width;
    if (ctx.canvas.height != height) ctx.canvas.height = height;

    if (this.width != width) {
      this.width = width;
      this.sampleWindow = getSampleWindow(l, this.width, this.zoom);
    }

    const min = this.minDecibels;
    const max = this.maxDecibels;
    const range = max - min;
    const mul = (1 - height) / range;
    const hl = l / 2;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = getComputedStyle(this.canvas!).getPropertyValue("color");

    const firstPoint = (hl + this.sampleWindow.firstPoint) % l;
    const firstX = -this.sampleWindow.offset;
    const numPoints =
      1 + this.sampleWindow.lastPoint - this.sampleWindow.firstPoint;
    const pointDistance = this.sampleWindow.distance;
    ctx.moveTo(firstX, (this.spectrum[firstPoint] - max) * mul);
    for (let i = 1; i < numPoints; ++i) {
      const x = firstX + i * pointDistance;
      ctx.lineTo(x, (this.spectrum[(i + firstPoint) % l] - max) * mul);
    }
    ctx.stroke();
  }

  private onClick(e: MouseEvent) {
    let fraction = getUnzoomedFraction(e.offsetX / this.offsetWidth, this.zoom);
    this.dispatchEvent(new SpectrumTapEvent({ fraction }));
    e.preventDefault();
  }

  private getContext(): CanvasRenderingContext2D | undefined {
    if (this.context) return this.context;
    if (!this.canvas) return;
    this.canvas.width = DefaultFftSize;
    this.canvas.height = this.maxDecibels - this.minDecibels;
    this.context = this.canvas.getContext("2d")!;
    return this.context;
  }
}
