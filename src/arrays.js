// Complete the following functions.
// These functions only need to work with arrays.

  // Iterates over a list of elements, yielding each in turn to the `cb` function and keeps a count of the iterations.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
const map = (elements, cb) => {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push(cb(elements[i]));
  }
  return result;
};

/*eslint-disable*/
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
const reduce = (elements, cb, memo) => {
  let acc;
  let i;
  // if memo exists let i = memo, otherwise set to 0
  memo !== undefined ? acc = memo : acc = elements[0];
  acc === memo ? i = 0 : i = 1; 
  for (i; i < elements.length; i++) {
    acc = cb(acc, elements[i]);
  }
  return acc;
};
/* eslint-enable*/

  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return undefined;
};

  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
const filter = (elements, cb) => {
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    // callback function executes test (true or false)
    // if true add to result array
    if (cb(elements[i])) result.push(elements[i]);
  }
  return result;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flattened = [];
  const str = elements.join();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ',') {
      flattened.push(str[i]);
    }
  }
  return flattened; // returns an array of strings...
};
console.log(flatten([1, [2], [3, [[4]]]]));

const flatten2= (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const flattened = [];
};

console.log(flatten([1, [2], [3, [[4]]]]));



/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
