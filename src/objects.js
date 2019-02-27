// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const newArr = [];
  let key;
  for (key in obj) {
    newArr.push(key);
  }
  return newArr;
};

console.log(keys({animal: "dog", legs: 4, smiles: true }));

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const newArr = [];
  let prop;
    for (prop in obj) {
      newArr.push(obj[prop]);
    }
  return newArr;
};

console.log(values({animal: "dog", legs: 4, smiles: true }));

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  const key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    const newValue = cb(obj[key[i]]);
    newObj[key[i]] = newValue;
  }
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  const k = Object.keys(obj);
  for ( let i = 0; i < k.length; i++) {
    newObj[obj[k[i]]] = k[i];
  };
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const k = Object.keys(defaultProps);
  for (let i = 0; i < k.length; i++) {
    if (!obj[k[i]]) {
      obj[k[i]] = defaultProps[k[i]]
    }
  }
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
