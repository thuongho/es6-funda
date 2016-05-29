'use strict';

(function () {

  // Destructuring Assignment
  // extract values from arrays or objects using a literal syntax

  // array literal with items
  var [x, y] = ['a', 'b'];
  console.log(x, y);

  // left side has to match keys
  let {a, b} = {a: 'c', b: 'd'};
  console.log(a, b);

  // return multiple arrays
  function returnMultipleArrays() {
    return [
      ['a', 'b', 'c'],
      [1,2,3]
    ];
  }

  let [arr1, arr2] = returnMultipleArrays();
  let arr = returnMultipleArrays();

  console.log(arr1, arr2);
  console.log(arr);

  // ignoring values
  let [, c] = ["ignored", "not ignored"];
  console.log(c);

  let {firstname, lastname, employment: { status }} = {
    firstname: 'Sam',
    lastname: 'Ho',
    employment: {
      status: 'is coding'
    }
  }

  // destructor nested, match prop in { status }
  console.log(firstname, lastname, status);

}());