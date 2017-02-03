/*eslint-env node*/
const {join: joinPath} = require('path');
const {writeImmutableFuncFile} = require('./immutableFuncGenerator');

const getOutputPath = () => joinPath(process.cwd(), 'immutableFunc.js');

console.log('WRITING', getOutputPath());
writeImmutableFuncFile(getOutputPath());
