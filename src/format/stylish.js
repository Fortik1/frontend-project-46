const space = (s) => ' '.repeat(s);

const str = (tree, n = 0) => tree.map((node) => {
  switch (node.type) {
    case 'deleted':
      return `${space(n)}  - ${node.key}: ${node.value}`;
    case 'added':
      return `${space(n)}  + ${node.key}: ${node.value}`;
    case 'unchanged':
      return `${space(n)}    ${node.key}: ${node.value}`;
    case 'changed':
      return `${space(n)}  - ${node.key}: ${node.value1}\n${space(n)}  + ${node.key}: ${node.value2}`;
    case 'nested': {
      const line = str(node.children, n + 4);
      return `${space(n)}    ${node.key}:{\n${line}}`;
    }
    default:
      throw new Error(`Unckown type of node '${node.type}'`);
  }
});

function formatTree(tree) {
  const res = str(tree, 0);
  return `{\n${res.join('\n')}\n}`;
}

export default formatTree;
