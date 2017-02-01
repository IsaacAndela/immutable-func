/*eslint-env node*/
import {join as joinPath} from 'path';
import {writeImmutableFuncFile} from './immutableFuncGenerator';

const getOutputPath = () => joinPath(process.cwd(), 'immutableFunc.js');

console.log('WRITING', getOutputPath());
writeImmutableFuncFile(getOutputPath());
