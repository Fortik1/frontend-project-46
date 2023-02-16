import _ from 'lodash';

const string = (value) => {
  if (_.isObject(value) && value !== null) return '[complex value]';
  if (_.isString(value)) return `'${value}'`;
  return String(value);
};

const fullPath = (node, path) => {
  if (path !== '') return `${path}.${node.key}`;
  return String(node.key);
};

const createTree = (str, path) => str
  .filter((node) => node.type !== 'unchanged')
  .map((node) => {
    const curPath = fullPath(node, path);
    switch (node.type) {
      case 'added':
        return `Property '${curPath}' was added with value: ${string(node.value)}`;
      case 'deleted':
        return `Property '${curPath}' was removed`;
      case 'changed':
        return `Property '${curPath}' was updated. From ${string(node.value1)} to ${string(node.value2)}`;
      case 'nested':
        return createTree(node.children, curPath).join('\n');
      default:
        return null;
    }
  });

const plainStyle = (tree) => createTree(tree, '').join('\n');
export default plainStyle;
