import { css, html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  getDemod,
  getMode,
  getSchemes,
  modeParameters,
  type Mode,
  type Demod,
} from "@jtarrio/webrtlsdr/demod/modes.js";

@customElement("demod-benchmark")
class DemodBenchmark extends LitElement {
  static get styles() {
    return [css``];
  }

  render() {
    return html`<div class="top">
      <label for="sampleRate">Sample rate: </label
      ><input
        type="number"
        id="sampleRate"
        min="250000"
        max="3000000"
        step="1"
        .value=${String(this.sampleRate)}
        @change=${this.onSampleRateChange}
      />
      <label for="scheme">Modulation: </label>
      <select id="scheme" @change=${this.onModeChange}>
        ${this.availableModes
          .keys()
          .map(
            (k) =>
              html`<option value="${k}" .selected=${this.mode.scheme == k}>
                ${k}
              </option>`
          )}
      </select>
      <label
        for="bandwidth"
        .hidden=${!modeParameters(this.mode).hasBandwidth()}
        >Bandwidth: </label
      ><input
        type="number"
        id="bandwidth"
        min="0"
        max="20000"
        step="1"
        .value=${String(modeParameters(this.mode).getBandwidth())}
        .hidden=${!modeParameters(this.mode).hasBandwidth()}
        @change=${this.onBandwidthChange}
      />
      <label for="stereo" .hidden=${!modeParameters(this.mode).hasStereo()}
        >Stereo: </label
      ><input
        type="checkbox"
        id="stereo"
        .checked=${modeParameters(this.mode).getStereo()}
        .hidden=${!modeParameters(this.mode).hasStereo()}
        @change=${this.onStereoChange}
      />
      <button id="run" .hidden=${this.running} @click=${this.onRun}>
        Run!
      </button>
      ${this.result !== undefined
        ? html`<span .hidden=${this.result === undefined}
            >Result: ${twoDig(this.result)}ms / second</span
          >`
        : nothing}
    </div>`;
  }

  @property({ attribute: false }) sampleRate: number = 1024000;
  @property({ attribute: false }) availableModes = new Map(
    getSchemes().map((s) => [s, getMode(s)])
  );
  @property({ attribute: false }) mode: Mode = getMode("WBFM");
  @state() running: boolean = false;
  @state() result: number | undefined;

  private samplesI?: Float32Array;
  private samplesQ?: Float32Array;

  onSampleRateChange(e: Event) {
    let input = e.target as HTMLInputElement;
    let value = Number(input.value);
    if (isNaN(value)) {
      input.value = String(this.sampleRate);
      return;
    }
    this.samplesI = undefined;
    this.samplesQ = undefined;
    this.sampleRate = value;
  }

  onModeChange(e: Event) {
    let input = e.target as HTMLSelectElement;
    let value = input.selectedOptions[0].value;
    let mode = this.availableModes.get(value);
    if (mode) this.mode = mode;
  }

  onBandwidthChange(e: Event) {
    let modeParams = modeParameters(this.mode);
    let input = e.target as HTMLInputElement;
    let value = Number(input.value);
    if (isNaN(value)) {
      input.value = String(modeParams.getBandwidth());
      return;
    }
    this.mode = modeParams.setBandwidth(value).mode;
  }

  onStereoChange(e: Event) {
    let input = e.target as HTMLInputElement;
    this.mode = modeParameters(this.mode).setStereo(input.checked).mode;
  }

  onRun() {
    const seconds = 10;
    this.result = undefined;
    this.running = true;
    setTimeout(() => {
      if (!this.samplesI || !this.samplesQ) {
        this.samplesI = new Float32Array(seconds * this.sampleRate);
        this.samplesQ = new Float32Array(seconds * this.sampleRate);
        for (let i = 0; i < this.samplesI.length; ++i) {
          const w = 2 * Math.PI * Math.random();
          const u = Math.random() + Math.random();
          const r = u > 1 ? 2 - u : u;
          this.samplesI[i] = (Math.cos(w) * r) / 2;
          this.samplesQ[i] = (Math.sin(w) * r) / 2;
        }
      }

      let scheme = makeScheme(this.mode, this.sampleRate);
      const samplesPerBuffer = this.sampleRate / 20;
      const start = performance.now();
      for (let i = 0; i < this.samplesI.length; i += samplesPerBuffer) {
        scheme.demodulate(
          this.samplesI.subarray(i, i + samplesPerBuffer),
          this.samplesQ.subarray(i, i + samplesPerBuffer),
          this.sampleRate * 0.1
        );
      }
      const elapsed = performance.now() - start;

      this.running = false;
      this.result = elapsed / seconds;
    }, 0);
  }
}

function makeScheme(mode: Mode, sampleRate: number): Demod<Mode> {
  const outRate = 48000;
  return getDemod(sampleRate, outRate, mode);
}

function twoDig(n: number) {
  return Math.floor(n * 100) / 100;
}
