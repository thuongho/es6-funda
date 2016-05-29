'use strict';

(function () {

  // Data Structures
  // Set
  // store unique values of any type
  // support through polyfill

  var mySet = new Set();

  // NaN is treated the same as NaN
  let anArray = [1,2,1,2,3,4,5]
  let myOtherSet = new Set(anArray);

  console.log(myOtherSet);  // Set { 1, 2, 3, 4, 5 }
  console.log(myOtherSet.size);

  mySet.add('something').add('else');
  // if the value is not there, nothing bad will happen and it will still return false
  mySet.delete('5');  // true
  // clears everything and returns undefined
  // mySet.clear()

  console.log(mySet.has('something'));


  myOtherSet.forEach(function(value1, value2, set) {
    console.log('value1', value1);
    console.log('value2', value2);
    console.log(set);
  });

  console.log(myOtherSet[0]); // undefined


  // maps
  // key value pairs
  var myMap = new Map();

  // [key, value]
  let myOtherMap = new Map([['1', 'c'], [1,6]]);
  console.log(myOtherMap);

  // add new key value
  myMap.set('test', {e: 'c'});
  // retrieve a value using get
  console.log(myMap);
  console.log(myMap.get('test'));
  console.log(myMap.has('oops'));  // false


  // WEAK SETS AND WEAKMAPS
  var myWeakSet = new WeakSet();

  let scomeObj = {};
  // add
  myWeakSet.add(scomeObj);
  console.log(myWeakSet.has(scomeObj));

  myWeakSet.delete(scomeObj);
  // if it has no reference, it will be garbage collected
  // can't be ennumerables
  console.log(myWeakSet.has(scomeObj));

  let myWeakMap = new WeakMap();


  // ITERATORS
  // done 
  var mySSet = new Set(['a','b','c']),
  // items is an iterator
    items = mySSet.entries(); // entries allow for iterator
  // next() returns 2 items, done and value
  console.log(items.next());
  console.log(items.next());
  console.log(items.next());
  console.log(items.next());
  //   { value: [ 'a', 'a' ], done: false }
  // { value: [ 'b', 'b' ], done: false }
  // { value: [ 'c', 'c' ], done: false }
  // { value: undefined, done: true }


  let myMMap = new Map([['1', 'c'], [1,6]])
  let setValues = mySSet.values(),
    mapValues = myMMap.values();

  console.log(setValues.next());
  console.log(mapValues.next());

  let mapKeys = myMMap.keys();
  console.log(mapKeys.next());

  // for of iterates values
  // for in iterates keys

  for(let val of [1,2,3]) {
    console.log(val);
  }
  // for maps u get key val
}());