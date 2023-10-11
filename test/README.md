# JavaScript Array Manipulation

This project provides a collection of JavaScript functions for array manipulation. Each function mimics the behavior of built-in JavaScript Array methods but is implemented from scratch. The functions are designed to work with arrays and cover common operations such as iterating over elements, mapping, reducing, finding elements, filtering, and flattening nested arrays.

## Project Structure

The project is organized as follows:

- `each.js`: Contains the `each` function to iterate over array elements.
- `map.js`: Contains the `map` function to create a new array by transforming elements.
- `reduce.js`: Contains the `reduce` function to combine elements into a single value.
- `find.js`: Contains the `find` function to find an element based on a truth test.
- `filter.js`: Contains the `filter` function to create an array of elements that pass a truth test.
- `flatten.js`: Contains the `flatten` function to flatten nested arrays.

## Usage

To use these functions, you can import them into your JavaScript code. Here's an example of how to use the `map` function:

```javascript
const map = require('./map');

const items = [1, 2, 3, 4, 5, 5];
const squared = map(items, (item) => item * item);

console.log(squared); // [1, 4, 9, 16, 25, 25]
