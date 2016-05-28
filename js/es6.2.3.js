'use strict';

(function () {

  // templating string
  // support multiline string
  // interpolation

  var templateStr = `this is a 
  template string`;

  let a = '5',
      b = 'something after 6';

  // token substitution
  console.log(`a is ${a}, while b is ${b}`);

  function reverseString(string) {
    return string.split('').reverse().join('');
  }

  console.log(`a is ${a}, while b is ${b}, and ${reverseString(b)} is reversed`);

  // tag a string
  function str(literals, ...values) {

    console.log(literals);  // [ 'a is ', ', while b is ', ', and ', ' is reversed' ]
    // without spread it just returns the first value
    console.log(values);  // [ '5', 'something after 6', '6 retfa gnihtemos' ]

    return values[3] + literals[3] + literals[1] + values[2] + literals[0] + values[1];
  }

  // tag by prepending the prefix to a string
  str`a is ${a}, while b is ${b}, and ${reverseString(b)} is reversed`;


}());