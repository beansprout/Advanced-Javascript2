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

  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
const flatten = (elements) => {
  elements.reduce((acc, current) => acc.concat(current),
  []
  );
};

console.log(flatten([1, [2], [3, [[4]]]]));

//------------------------------
// flatten 
//steps
// 1 - to flatten an array, first flatten each nested array and concatenate alll the elements
// 2- the base calse is when the array is allready flat 
// 2 cases - elements, and arrays
// case 1 - element - if an element can just push onto newArr
// case 2 - array of elements
// case 3 - array of nested arrays
// when you say I wish I could just reapply the code I've already written to this case that's a sign that you should use recursion.

//if (elem is an array) {
  const flatten = (elements) {
  if (Array.isArray(elem)) {
    const nestedArray = flatten(elem(
    each(nestedArray, (nestedElem) => {
      // result.push(nestedElem);
      result =result.concat(nestedArray);
    });
  } else {
    result.push(elem);
  });
  return result;



// nested nested nested 
// what to do with this
// 
//   const nestedArray= elem;
//   each(nestedArray, (nestedElem) => {
//     result.push(nestedElem);
//   })
// }
//
const flatten = (elements) => {
  map(elements, (elem) => {
    // 
    if(Array.isArray(elem)) {
      return flatten(elem);
    }
    return elem;
  });

}

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
