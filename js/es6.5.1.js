'use strict';

(function () {

  // FAT Arrow function or function expression
  // lexical this
  var fn = (params1) => {
    var square = params1 + params1;
    return square;
  }; 

  // no parens
  var fn2 = params1 => {
    var square = params1 + params1;
    return square;
  };

  // shorter way to write
  var fn3 = params1 => square = params1 + params1;

  var fn4 = params1 => ({square: params1 + params1});

  console.log(fn(3));

  let user = {
    name: 'sam'
  };

  function getUserName () {
    return this.name;
  }

  // this will give error
  // let getUserName = () => this.name;

  console.log(getUserName.call(user));

  // a normal function does run to completion where it runs all the code inside function
  // blocking

  // GENERATOR
  // invoke the generator to get an iterator and the iterator is what invokes the function
  function* square(x) {
    // pause after this statment
    yield x * x;
    console.log('x was ', x);
  }

  let squareGenerator = square(5);
  console.log(squareGenerator.next());
  // does print 'x was ', x

  // now it prints 'x was ', x
  console.log(squareGenerator.next());


  function* square2(x) {
    // pause after this statment
    var y = (yield x * x) * 3;
    console.log('x was ', x);
    console.log('y was ', y);
  }

  let square2Generator = square2(5);
  console.log(square2Generator.next());
  console.log(square2Generator.next(10));
  
}());