'use strict';

(function () {

  // Promise
  // fulfilled, rejected, pending, settled (either fulfill or rejected)
  // var myPromise = new Promise(function(resolve, reject) {
  //   // executor function - resolve or reject 
  //   (Math.random() < .5) ? resolve('success') : reject('failure');
  // });

  // // then also returns a promise
  // myPromise.then(function(msg) {
  //   // fulfillment handler
  //   console.log(msg, 'The promise was resolved');
  //   return true;
  // }, function (err) {
  //   // rejection handler
  //   console.log(err, 'The promise was rejected');
  //   return false;
  // }).then(function(value) {
  //   console.log(value);
  // }, function(reason) {});

  // AJAX
  var url = 'http://numbersapi.com';
  function getNumberFact(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function (e) {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(this.statusText);
          }
        }
      }

      request.open('GET', url, true);
      request.send();
    });
  }

  getNumberFact(url + '/random').then(
    response => console.log(response),
    error => console.log(error)
  );
  
}());