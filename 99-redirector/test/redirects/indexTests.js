'use strict';

var assert = require('node-assertthat');

var redirects = require('../../redirects');

suite('redirects', function () {
  suite('getAll', function () {
    test('returns all redirects.', function (done) {
      redirects.getAll(function (err, actual) {
        assert.that(err, is.null());
        assert.that(actual, is.equalTo([
          { alias: 'g', url: 'http://www.google.de' },
          { alias: 'h', url: 'http://www.heise.de/newsticker' }
        ]));
        done();
      });
    });
  });

  suite('getBy', function () {
    test('returns a url for an existing alias.', function (done) {
      redirects.getBy('g', function (err, actual) {
        assert.that(err, is.null());
        assert.that(actual, is.equalTo('http://www.google.de'));
        done();
      });
    });

    test('returns an error for a non-existing alias.', function (done) {
      redirects.getBy('foo', function (err, actual) {
        assert.that(err, is.not.null());
        done();
      });
    });
  });
});
