#!/usr/bin/env node

//////   Using this as a tester for now

const DEBUG_MODE = true

import Toolkit from './src/app.js';

const [,, ...args] = process.argv

const toolkit = new Toolkit();
const toolkitRun1 = toolkit.calculate('test1', null);
const toolkitRun2 = toolkit.calculate('test2', null);

console.log('\n\n//////   DIGITAL TOOLKIT   //////\n')

// console.log(toolkit.list())
// console.log(toolkit.calculate('test1', null))
// console.log(toolkit.calculate('test2', null))

console.log('\n\n//////   DIGITAL TOOLKIT   //////\n')

console.log(`\n//////   LISTING OUTPUT\n\n${toolkit.list()}\n`)

console.log(`\n//////   USING TEST1\n\n${JSON.stringify(toolkitRun1, null, 2)}\n`)

console.log(`\n//////   USING TEST2\n\n${JSON.stringify(toolkitRun2, null, 2)}\n`)