import { cwd } from 'node:process';
import { resolve, extname, format } from 'node:path';
import YAML from 'js-yaml';
import fs from 'fs';
import formater from './format/formatMain.js';
import getTree from './getTree.js';

const getFilePath = (file) => resolve(cwd(), file);

const readFile = (file) => fs.readFileSync(file, 'utf-8');

const getFormat = (file) => extname(file).substring(1);

function pars(data, format) {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
      return YAML.load(data);
    case 'yaml':
      return YAML.load(data);
  }
}

function gendeff(filepath1, filepath2, format = 'stylish') { // main function
  const filePath1 = getFilePath(filepath1);
  const filePath2 = getFilePath(filepath2);

  const dataFile1 = readFile(filePath1);
  const dataFile2 = readFile(filePath2);

  const formatFile1 = getFormat(filePath1);
  const formatFile2 = getFormat(filePath2);

  const fileTree = getTree(
    pars(dataFile1, formatFile1),
    pars(dataFile2, formatFile2),
  );

  return formater(fileTree, format);
}

export default gendeff;
