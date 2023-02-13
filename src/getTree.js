import _ from 'lodash';

export default function getTree(data1, data2) {
  const files = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = files.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return {
        key,
        type: 'deleted',
        value: data1[key],
      };
    }
    if (!Object.hasOwn(data1, key)) {
      return {
        key,
        type: 'added',
        value: data2[key],
      };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        children: getTree(data1[key], data2[key]),
        type: 'nested',
      };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'changed',
        value1: data1[key],
        value2: data2[key],
      };
    }
    return {
      key,
      type: 'unchanged',
      value: data1[key],
    };
  });

  return result;
}
