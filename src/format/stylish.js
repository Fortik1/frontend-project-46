import _ from 'lodash';

const space = (n) => ' '.repeat(n);

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
      const line = str(node.children, n += 4);
      return `${space(n)}    ${node.key}:{\n${line}}`;
    }
  }
});

function formatTree(tree) {
  const res = str(tree);
  return `{\n${res.join('\n')}\n}`;
}

export default formatTree;
