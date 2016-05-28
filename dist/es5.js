'use strict';

(function () {

  // setting defaults
  // default params is avail to other params in the list
  function logSomthing() {
    var something = arguments.length <= 0 || arguments[0] === undefined ? 'default messsage' : arguments[0];
    var somethingElse = arguments.length <= 1 || arguments[1] === undefined ? something + 'with concat' : arguments[1];

    console.log(something, somethingElse);
  }

  logSomthing();
  logSomthing(undefined, 'and overriding');

  // spread operator ...
  function sum(a, b, c) {
    return a + b + c;
  }

  var nums = [1, 2, 3];

  console.log(sum.apply(undefined, nums)); // 6
  console.log(sum(nums)); // [1,2,3], undefined, undefined

  var arr = [].concat(nums, [4, 5, 6]);

  console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

  // rest params
  function joinStuff() {
    for (var _len = arguments.length, stuffs = Array(_len), _key = 0; _key < _len; _key++) {
      stuffs[_key] = arguments[_key];
    }

    console.log(stuffs.join('-'));
  }

  joinStuff('hello', 'my', 'name', 'is'); // hello-my-name-is
})();
//# sourceMappingURL=es5.js.map
