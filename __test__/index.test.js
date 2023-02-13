import url from 'url';
import { test, expect } from '@jest/globals';
import { dirname } from 'node:path';
import gendiff from '../src/index.js';
import fs from 'fs';
import path from 'path';

const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const getFixturePath = (nameFile) => path.join(__dirname, '..', 'files', nameFile);
const readFile = (nameFile) => fs.readFileSync(getFixturePath(nameFile), 'utf-8');

const test1Default = readFile('OutputTest1.txt');

const file1 = './files/file1.json';
const file2 = './files/file2.json';

test('test1', () => {
    expect(gendiff(file1, file2)).toEqual(test1Default);
})
