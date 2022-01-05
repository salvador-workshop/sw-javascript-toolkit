import { expect } from 'chai';
import Toolkit from '../index.js';

// describe('Testing printMsg function, should return "Hello World!" ', () => {
//     it('Should Return Hello World!', () => {
//         expect(printMsg()).to.equal("Hello World!");
//     });
// });

describe('TestToolkit', () => {
    it('Should list available calculations', () => {
        const toolkit = new Toolkit()
        const toolkitRun = toolkit.list();

        expect(toolkitRun).to.be.a('string')
        expect(toolkitRun.length).to.be.above(0);
    });

		it('Should run calculators', () => {
        const toolkit = new Toolkit()
        const toolkitRun = toolkit.calculate('test1', null);

        expect(toolkitRun).to.be.an('object')
        expect(Object.keys(toolkitRun).length).to.equal(32);
    });
});
