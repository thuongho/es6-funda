'use strict';

(function () {

  // setting defaults
  // default params is avail to other params in the list
  function logSomthing(something = 'default messsage', somethingElse = something + 'with concat') {
    console.log(something, somethingElse);
  }

  logSomthing();
  logSomthing(undefined, 'and overriding');

  // spread operator ...
  function sum(a, b, c) {
    return a + b + c;
  }

  let nums = [1,2,3];

  console.log(sum(...nums)); // 6
  console.log(sum(nums)); // [1,2,3], undefined, undefined

  let arr = [...nums, 4, 5, 6]; 

  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

  // rest params
  function joinStuff(...stuffs) {
    console.log(stuffs.join('-'));
  }

  joinStuff('hello', 'my', 'name', 'is'); // hello-my-name-is
}());