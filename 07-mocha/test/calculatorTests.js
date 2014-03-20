'use strict';

var assert = require('node-assertthat');

var calculator = require('../calculator');

suite('calculator', function () {
  suite('multiply', function () {
    test('returns the product of two positive numbers.', function () {
      // Arrange
      var first = 17,
          second = 5;

      var expected = 85;

      // Act
      var actual = calculator.multiply(first, second);

      // Assert
      assert.that(actual, is.equalTo(expected));
    });
  });

  suite('multiplyAsync', function () {
    test('returns the product of two positive numbers.', function (done) {
      // Arrange
      var first = 17,
          second = 5;

      var expected = 85;

      // Act
      calculator.multiplyAsync(first, second, function (err, actual) {
        // Assert
        assert.that(actual, is.equalTo(expected));
        done();
      });
    });
  });
});
