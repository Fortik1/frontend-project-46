import stylishFormat from './stylish.js';
import plainFormat from './plain.js';

function formatter(tree, format) {
  switch (format) {
    case 'stylish':
      return stylishFormat(tree);
    case 'plain':
      return plainFormat(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      throw new Error(
        `The ${format} format is supported.\n supported fornmats: stylish, plain, json`,
      );
  }
}

export default formatter;
