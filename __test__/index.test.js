import url from 'url';
import { test, expect } from '@jest/globals';
import { dirname } from 'node:path';
import fs from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const fileName = url.fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const getFixturePath = (nameFile) => path.join(__dirname, '..', '__fixtures__', nameFile);
const readFile = (nameFile) => fs.readFileSync(getFixturePath(nameFile), 'utf-8');

const testDefault = readFile('OutputTest1.txt');
const testPlain = readFile('OutputTestPlain.txt');
const testJSON = readFile('OutputTestJson.txt');

const file1 = './__fixtures__/file1.json';
const file2 = './__fixtures__/file2.json';

const fileYml1 = './__fixtures__/file1.yml';
const fileYml2 = './__fixtures__/file2.yml';

test('json', () => {
  expect(gendiff(file1, file2)).toEqual(testDefault);
});

test('yml', () => {
  expect(gendiff(fileYml1, fileYml2)).toEqual(testDefault);
});

test('plain', () => {
  expect(gendiff(file1, file2, 'plain')).toEqual(testPlain);
});

test('JSON', () => {
  expect(gendiff(file1, file2, 'json')).toEqual(testJSON);
});
