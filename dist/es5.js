'use strict';

var _templateObject = _taggedTemplateLiteral(['a is ', ', while b is ', ', and ', ' is reversed'], ['a is ', ', while b is ', ', and ', ' is reversed']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function () {

  // templating string
  // support multiline string
  // interpolation

  var templateStr = 'this is a \n  template string';

  var a = '5',
      b = 'something after 6';

  // token substitution
  console.log('a is ' + a + ', while b is ' + b);

  function reverseString(string) {
    return string.split('').reverse().join('');
  }

  console.log('a is ' + a + ', while b is ' + b + ', and ' + reverseString(b) + ' is reversed');

  // tag a string
  function str(literals, values) {

    console.log(literals); // [ 'a is ', ', while b is ', ', and ', ' is reversed' ]
    console.log(values); // [ '5', 'something after 6', '6 retfa gnihtemos' ]

    return values[3] + literals[3] + literals[1] + values[2] + literals[0] + values[1];
  }

  // tag by prepending the prefix to a string
  str(_templateObject, a, b, reverseString(b));
})();
//# sourceMappingURL=es5.js.map
