'use strict';

(function () {

// NUMBERS
//constant
// EPSILON 
// MAX_SAFE_INTEGER
// MIN_SAFE_INTEGER

console.log(Number.EPSILON);

console.log(Number.isFinite(1));
console.log(Number.isFinite(Infinity));

// isSafeInteger
// 2 power 53 is not safe

// arguments of any type
console.log(Array.of('test', [1,2]));

function arrayFromArgs() {
  // creates an array from arguments
  var argsArr = Array.from(arguments);
  console.log(typeof argsArr); // object
  return argsArr;
}


console.log(arrayFromArgs('something' , 'another'));

let superheros = [
  {
    name: 'Peter Parker',
    superherName: 'Spiderman'
  },
  {
    name: 'Bruce Wayne',
    superherName: 'Batman'
  }];

  function findByHeroName(name) {
    return superheros.find(function(item) {
      return item.superherName === name;
    });
  }
  console.log(findByHeroName('Batman'));

  function findHeroIndex(name) {
    return superheros.findIndex(function(item) {
      return item.superherName === name;
    });
  }

  console.log(findByHeroName('Spiderman'));

  // mutable - change the original array
  // take the first object and copy over the second one
  // [ { name: 'Peter Parker', superherName: 'Spiderman' },
  // { name: 'Peter Parker', superherName: 'Spiderman' } ]
  console.log(superheros.copyWithin(1,0));


  // Object Literals
  var x = 'test',
    y = 42;

    // no need to do key value
    let myObj = {
      x, y
    }

    console.log(myObj.x);  // test
    console.log(myObj.y);  // 42

    let objectWithMethod = {
      // no need to use function
      someMethod (aParam) {
        console.log(aParam);
      }
    };

    objectWithMethod.someMethod('yay es6');

    let dynamicPropName = {
      // computed method
      // use an expression for prop name
      [x+y]: 'some value'
    };
    console.log(dynamicPropName.test42);

    // 1s target where added, others are source copy from 
    let conposedObj = Object.assign({}, myObj, objectWithMethod, dynamicPropName);
    console.log(conposedObj);
    // { x: 'test',
      // y: 42,
      // someMethod: [Function: someMethod],
      // test42: 'some value' }

}());