const DEBUG_MODE = true

import TestCalc1 from './calculators/test-calc-1.js';
import TestCalc2 from './calculators/test-calc-2.js';

import TestAdapter1 from './adapters/test-adapter-1.js';
import TestAdapter2 from './adapters/test-adapter-2.js';

import IOUtils from './utils/input-output.js';

export default class SWDigitalToolkit {
  constructor() {
    this.calculators = [];

    //////   Initialize calculators and adapters

    this.add('test1', 'Test Calculator 1', new TestCalc1(), new TestAdapter1());
    this.add('test2', 'Test Calculator 2', new TestCalc2(), new TestAdapter2());
  }

  add(id, desc, calculator, adapter) {
    this.calculators.push({
      id: id,
      desc: desc,
      calculator: calculator,
      adapter: adapter,
    });
  }

  //////////////////////////////////////
  //////      PUBLIC MEMBERS      //////

  /**
   * Runs a calculator in the toolkit
   * @param {(number|string)} calculator - calculator, specified by name or number (see list())
   * @param {object} input - 32-channel input value
   */
  calculate(calculator, input) {

    //////   Choose the correct calculator, and use it

    // const toolkitRawOutput = [0, 1, 2, 3, 4]
    const toolkitRawOutput = this.calculators[0].calculator.calculate(input);

    //////   Format the output

    const toolkitFormattedOutput = {};

    if(DEBUG_MODE) {
      console.log(toolkitRawOutput)
      console.log(this.calculators)
    }

    toolkitRawOutput.forEach((outputVal, channel) => {
      toolkitFormattedOutput[channel] = outputVal;
    })

    return toolkitFormattedOutput;
  }

  /**
   * Returns a list of available calculators
   */
  list() {
    let list = "";
    this.calculators.forEach((calc, idx) => {
      list += `[${idx}] -- [${calc.id}] -- ${calc.desc}\n`
    })
    return list;
  }
}
