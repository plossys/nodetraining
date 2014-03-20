'use strict';

var calculator = {
  multiply: function (first, second) {
    var result = 0;
    for (var i = 0; i < first; i++) {
      result += second;
    }
    return result;
  },

  multiplyAsync: function (first, second, callback) {
    var that = this;
    setTimeout(function () {
      callback(null, that.multiply(first, second));
    }, 2.5 * 1000);

    // EcmaScript 6: Fat arrow operator, behält this bei
    // setTimeout(() => {
    //   callback(null, this.multiply(first, second));
    // }, 2.5 * 1000);
  }
};

module.exports = calculator;
