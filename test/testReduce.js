const reduce = require('./reduce');
const items = [1, 2, 3, 4, 5, 5];

const sum = reduce(items, (acc, item) => acc + item, 0);
console.log(sum);
