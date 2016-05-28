'use strict';

(function () {

  // console.log(block);

  if (true) {
    // temporal dead zone
    // throw a ReferenceError before variable is initialized
    let block = 'block';

    for (let i = 0; i < 10; i++) {
      // do something with i
    }

    // only assign once and value added when initialized
    // not immutable
    const PI = 3.14159;

    // reference constants can be changed
    let obj = {
      test: "original"
    };

    const referenceObj = obj;
    obj.test = "changed";

    console.log(obj);
  }
}());