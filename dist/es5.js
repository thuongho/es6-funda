'use strict';

(function () {

  console.log(block);

  if (true) {
    // temporal dead zone
    // throw a ReferenceError before variable is initialized
    var _block = 'block';
  }
})();
//# sourceMappingURL=es5.js.map
