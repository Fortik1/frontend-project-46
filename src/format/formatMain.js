import stylishFormat from './stylish.js';

export default function formatter(tree, format) {
    switch (format) {
        case 'stylish':
            return stylishFormat(tree);
    }
}
