// Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
const flatten = (elements) => {
  let acc = [];
  elements.reduce((acc, current) => acc.concat(current));
};
console.log(flatten([1, [2], [3, [[4]]]]));
