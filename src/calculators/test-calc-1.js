import IOUtils from '../utils/input-output.js';

export default class TestCalc1 {
  constructor() {
    const inFields = [
      'value to add 1',
      'value to add 2',
      'value to subtract 1',
      'value to subtract 2',
    ]

    const outFields = [
      'added value',
      'subtracted value',
    ]
  }

  /**
   * Runs this calculator
   * @param {object} input - 32-channel input value
   */
  calculate(input) {
    const mockOutput = [Math.random() * 10, Math.random() * 10];
    return IOUtils.formatIOChannels(mockOutput);
  }
}
