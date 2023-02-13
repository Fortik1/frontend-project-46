import stylishFormat from './stylish.js';

function formatter(tree, format) {
  switch (format) {
    case 'stylish':
      return stylishFormat(tree);
    default:
      throw new Error(
        `The ${format} format is supported.\n supported fornmats: stylish, plain, json`,
      );
  }
}

export default formatter;
