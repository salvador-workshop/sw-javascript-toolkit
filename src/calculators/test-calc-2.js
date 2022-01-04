import IOUtils from '../utils/input-output.js';

export default class TestCalc2 {
  constructor() {
    const inFields = [
      'value to multiply 1',
      'value to multiply 2',
      'value to divide 1',
      'value to divide 2',
    ]

    const outFields = [
      'multiplied value',
      'divided value',
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
