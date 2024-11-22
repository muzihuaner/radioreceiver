// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { makeLowPassKernel } from "../dsp/coefficients";
import { AMDemodulator } from "../dsp/demodulators";
import { FrequencyShifter, AGC, FIRFilter } from "../dsp/filters";
import { ComplexDownsampler } from "../dsp/resamplers";
import { Demodulated, ModulationScheme } from "./scheme";

/** A demodulator for amplitude modulated signals. */
export class SchemeAM implements ModulationScheme {
  /**
   * @param inRate The sample rate of the input samples.
   * @param outRate The sample rate of the output audio.
   * @param bandwidth The bandwidth of the input signal.
   */
  constructor(inRate: number, outRate: number, bandwidth: number) {
    this.shifter = new FrequencyShifter(inRate);
    this.downsampler = new ComplexDownsampler(inRate, outRate, 151);
    const kernel = makeLowPassKernel(outRate, bandwidth, 151);
    this.filterI = new FIRFilter(kernel);
    this.filterQ = new FIRFilter(kernel);
    this.demodulator = new AMDemodulator(outRate);
    this.agc = new AGC(outRate, 1);
  }

  private shifter: FrequencyShifter;
  private downsampler: ComplexDownsampler;
  private filterI: FIRFilter;
  private filterQ: FIRFilter;
  private demodulator: AMDemodulator;
  private agc: AGC;

  /**
   * Demodulates the signal.
   * @param samplesI The I components of the samples.
   * @param samplesQ The Q components of the samples.
   * @param freqOffset The offset of the signal in the samples.
   * @returns The demodulated audio signal.
   */
  demodulate(
    samplesI: Float32Array,
    samplesQ: Float32Array,
    freqOffset: number
  ): Demodulated {
    this.shifter.inPlace(samplesI, samplesQ, -freqOffset);
    const [I, Q] = this.downsampler.downsample(samplesI, samplesQ);
    this.filterI.inPlace(I);
    this.filterQ.inPlace(Q);
    this.demodulator.demodulate(I, Q, I);
    this.agc.inPlace(I);
    return {
      left: I,
      right: new Float32Array(I),
      stereo: false,
    };
  }
}
