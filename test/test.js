import { expect } from 'chai';
import { printMsg } from '../index.js';

describe('Testing printMsg function, should return "Hello World!" ', () => {
    it('Should Return Hello World!', () => {
        expect(printMsg()).to.equal("Hello World!");
    });
});
