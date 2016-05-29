'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {

  // Destructuring Assignment
  // extract values from arrays or objects using a literal syntax

  // array literal with items
  var x = 'a';
  var y = 'b';

  console.log(x, y);

  // left side has to match keys
  var _a$b = { a: 'c', b: 'd' };
  var a = _a$b.a;
  var b = _a$b.b;

  console.log(a, b);

  // return multiple arrays
  function returnMultipleArrays() {
    return [['a', 'b', 'c'], [1, 2, 3]];
  }

  var _returnMultipleArrays = returnMultipleArrays();

  var _returnMultipleArrays2 = _slicedToArray(_returnMultipleArrays, 2);

  var arr1 = _returnMultipleArrays2[0];
  var arr2 = _returnMultipleArrays2[1];

  var arr = returnMultipleArrays();

  console.log(arr1, arr2);
  console.log(arr);

  // ignoring values
  var _ref = ["ignored", "not ignored"];
  var c = _ref[1];

  console.log(c);

  var _firstname$lastname$e = {
    firstname: 'Sam',
    lastname: 'Ho',
    employment: {
      status: 'is coding'
    }
  };
  var firstname = _firstname$lastname$e.firstname;
  var lastname = _firstname$lastname$e.lastname;
  var status = _firstname$lastname$e.employment.status;


  console.log(firstname, lastname, status);
})();
//# sourceMappingURL=es5.js.map
