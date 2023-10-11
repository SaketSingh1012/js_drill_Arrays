const map = require('../map');
const items = [1, 2, 3, 4, 5, 5];

const mapped = map(items, (item) => item * 2);
console.log(mapped);
