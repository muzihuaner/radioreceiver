import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { type GridSelection } from "./common";

export type DragType = "point" | "start" | "end";
export type HighlightDragEventType = {
  type: DragType;
  fraction: number;
};

export class HighlightDragEvent extends CustomEvent<HighlightDragEventType> {
  constructor(e: HighlightDragEventType) {
    super("highlight-drag", { detail: e });
  }
}

@customElement("rr-highlight")
export class RrHighlight extends LitElement {
  @property({ type: Number, reflect: true })
  bandwidth?: number;
  @property({ type: Number, reflect: true, attribute: "center-frequency" })
  centerFrequency?: number = 0;
  @property({ type: Boolean, reflect: true, attribute: "draggable-point" })
  draggablePoint: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: "draggable-left" })
  draggableLeft: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: "draggable-right" })
  draggableRight: boolean = false;
  @property({ attribute: false })
  selection?: GridSelection;

  static get styles() {
    return [
      css`
        #point,
        #band,
        .handle {
          position: absolute;
          top: 0;
          bottom: 0;
        }

        #point {
          width: 2px;
          background: var(--rr-highlight-color, rgba(255, 255, 0, 0.25));
        }

        #band {
          background: var(--rr-highlight-area-color, rgba(255, 255, 255, 0.25));
        }

        .handle {
          width: 4px;
          cursor: ew-resize;
        }

        #pointHandle:hover {
          background: var(--rr-highlight-handle-color, rgba(255, 255, 0, 1));
        }

        #leftBandHandle:hover,
        #rightBandHandle:hover {
          background: var(
            --rr-highlight-area-handle-color,
            rgba(255, 255, 255, 1)
          );
        }
      `,
    ];
  }

  render() {
    return html`${this.renderBand()}${this.renderPoint()}`;
  }

  private renderPoint() {
    if (this.selection?.point === undefined) return nothing;
    let x = this.selection.point * this.offsetWidth;
    return html`<div id="point" style="left:${x - 1}px"></div>
      ${this.draggablePoint
        ? html`<div
            id="pointHandle"
            class="handle"
            style="left:${x - 2}px"
            @pointerdown=${this.dragPointStart}
            @pointermove=${this.dragPoint}
            @pointerup=${this.dragPointEnd}
            @pointercancel=${this.dragPointCancel}
          ></div>`
        : nothing}`;
  }

  private renderBand() {
    if (this.selection?.band === undefined) return nothing;
    let l = this.selection.band.left * this.offsetWidth;
    let r = this.selection.band.right * this.offsetWidth;
    return html`<div id="band" style="left:${l}px;width:${r - l}px"></div>
      ${this.draggableLeft
        ? html`<div
            id="leftBandHandle"
            class="handle"
            style="left:${l - 2}px"
            @pointerdown=${this.dragLeftStart}
            @pointermove=${this.dragLeft}
            @pointerup=${this.dragLeftEnd}
            @pointercancel=${this.dragLeftCancel}
          ></div>`
        : nothing}${this.draggableRight
        ? html`<div
            id="rightBandHandle"
            class="handle"
            style="left:${r - 2}px"
            @pointerdown=${this.dragRightStart}
            @pointermove=${this.dragRight}
            @pointerup=${this.dragRightEnd}
            @pointercancel=${this.dragRightCancel}
          ></div>`
        : nothing}`;
  }

  private draggingPoint?: Dragging;
  private dragPointStart(e: PointerEvent) {
    this.draggingPoint?.cancel(e);
    this.draggingPoint = new Dragging("point", this, e);
  }
  private dragPoint(e: PointerEvent) {
    this.draggingPoint?.drag(e);
  }
  private dragPointEnd(e: PointerEvent) {
    this.draggingPoint?.finish(e);
    this.draggingPoint = undefined;
  }
  private dragPointCancel(e: PointerEvent) {
    this.draggingPoint?.cancel(e);
    this.draggingPoint = undefined;
  }

  private draggingLeft?: Dragging;
  private dragLeftStart(e: PointerEvent) {
    this.draggingLeft?.cancel(e);
    this.draggingLeft = new Dragging("start", this, e);
  }
  private dragLeft(e: PointerEvent) {
    this.draggingLeft?.drag(e);
  }
  private dragLeftEnd(e: PointerEvent) {
    this.draggingLeft?.finish(e);
    this.draggingLeft = undefined;
  }
  private dragLeftCancel(e: PointerEvent) {
    this.draggingLeft?.cancel(e);
    this.draggingLeft = undefined;
  }

  private draggingRight?: Dragging;
  private dragRightStart(e: PointerEvent) {
    this.draggingRight?.cancel(e);
    this.draggingRight = new Dragging("end", this, e);
  }
  private dragRight(e: PointerEvent) {
    this.draggingRight?.drag(e);
  }
  private dragRightEnd(e: PointerEvent) {
    this.draggingRight?.finish(e);
    this.draggingRight = undefined;
  }
  private dragRightCancel(e: PointerEvent) {
    this.draggingRight?.cancel(e);
    this.draggingRight = undefined;
  }
}

class Dragging {
  constructor(
    private type: DragType,
    private highlight: RrHighlight,
    firstEvent: PointerEvent
  ) {
    this.startX = firstEvent.clientX;
    this.original = highlight.selection;
    (firstEvent.target as HTMLElement).setPointerCapture(firstEvent.pointerId);
    firstEvent.preventDefault();
  }

  private startX: number;
  private original?: GridSelection;

  drag(e: PointerEvent) {
    let deltaX = e.clientX - this.startX;
    let fraction =
      this.type == "point"
        ? this.original?.point
        : this.type == "start"
          ? this.original?.band?.left
          : this.original?.band?.right;
    if (fraction !== undefined) {
      fraction += deltaX / this.highlight.offsetWidth;
      if (fraction < 0) fraction = 0;
      if (fraction > 1) fraction = 1;
      this.highlight.dispatchEvent(
        new HighlightDragEvent({ type: this.type, fraction })
      );
    }
    e.preventDefault();
  }

  finish(e: PointerEvent) {
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    e.preventDefault();
  }

  cancel(e: PointerEvent) {
    let fraction =
      this.type == "point"
        ? this.original?.point
        : this.type == "start"
          ? this.original?.band?.left
          : this.original?.band?.right;
    if (fraction !== undefined) {
      this.highlight.dispatchEvent(
        new HighlightDragEvent({ type: this.type, fraction })
      );
    }
    this.finish(e);
  }
}
