'use strict';

(function () {

  // class decoration
  // not hoisted to the top
  // class Employee {

  // }

  // class expression
  var Boss = class Boss {
    constructor (name) {
      // instance of the object
      this.name = name;
    }

    shoutName() {
      return this.name.toUpperCase();
    }

    work() {
      console.log(this.name, 'is working');
    }

    // this is called on Boss type rather than individual instances of Boss
    static reverseName(boss) {
      boss.name = boss.name.split('').reverse().join('');
    }
  };

  let theBoss = new Boss('Sam');
  // called on Boss type with static
  Boss.reverseName(theBoss);
  console.log(theBoss.shoutName());

  // subclassing with extend
  // the Employee class extends the Boss class
  let Employee = class Employee extends Boss {
    work() {
      // console.log(this.name, 'is working like a peon');
      // use super to access Parent class Boss
      console.log(super.shoutName(), 'is working like a PEON.');
    }
  }

  let emp = new Employee('Janet');
  theBoss.work();
  emp.work();

}());