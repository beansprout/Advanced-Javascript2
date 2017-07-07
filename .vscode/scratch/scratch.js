  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

// Strategy: 
// look at first element in array.
// if element is an array, remove first element in nested array and push it onto result array
// repeat until array is empty
const elements = [[1, 2], 3];

const flatten = (elements) => {
  const flattened = [];
  while (elements !== []) {
    console.log(elements[0]);
    // if 1st element is not empty array
    // console.log
    if (elements[0].length >= 1) { 
      flattened.push(elements[0][0]);
    }
    else {
    // remove the empty array
      flattened.splice(0, 1);
  }
  }
};

