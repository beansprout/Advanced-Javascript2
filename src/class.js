// `options` will be an object that will have the properties `email` and `password`.
// Set the `email` and `password` properties on the class.
// Add a method called `comparePasswords`.  `comparePasswords` should have a parameter
// for a potential password that will be compared to the `password` property.
// Return true if the potential password matches the `password` property.  Otherwise return false.

class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  comparePasswords(potentialPassword) {
    return potentialPassword === this.password;
  }
}
// console.log("User ", typeof User); // function

const me = new User({
  email: 'cg@gmail.com',
  password: '12345',
});

// console.log(me);

// Wrong password
// me.comparePasswords('123');
// console.log(me.comparePasswords('123')); // false

// console.log(Array.isArray(new User({}))); // false
// console.log("me ", typeof me); // object
//  console.log("new User() ", typeof new User());

// Correct password
// me.comparePasswords('12345');
// console.log(me.comparePasswords('12345')); // true

// const user = new User({
//   email: 'ben@lambdaschool.com',
//   password: 'correcthorsebatterystaple'
// });
// console.log(user.email);
// console.log(user.password);
// console.log(Object.keys(user).length);

// /* eslint-disable no-undef */ // Remove this comment once you write your classes.


// Create a class called `Animal` and a class called `Cat`.
// `Cat` should extend the `Animal` class.
// Animal and Cat should both have a parameter called `options` in their constructors.
// Animal should have the property `age` that's set in the constructor and the method
// `growOlder` that returns the age.
// Cat should have the property `name` that is set in the constructor and the method
// `meow` that should return the string `<name> meowed!` where `<name>` is the `name`
// property set on the Cat instance.

class Animal {
  constructor(options) {
    this.age = options.age;
  }

  growOlder() {
    return this.age + 1;
  }
}
// console.log("Animal ", Animal);

class Cat extends Animal {
  constructor(options, name) {
    super(options)
    this.name = options.name;
  }
  meow() {
     return `${this.name} meowed!`;
  }
}

const snowball = new Cat({
  name: 'Snowball II',
  age: 5
});

// console.log(snowball);
// console.log(snowball.meow());
// console.log(snowball.growOlder());

module.exports = {
  User,
  Cat
};
