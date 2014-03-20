'use strict';

var assert = require('node-assertthat');

var redirects = require('../../redirects');

suite('redirects', function () {
  suite('getAll', function () {
//    test('returns an empty list if no redirects were configured.');

    test('returns all redirects.', function (done) {
      redirects.getAll(function (err, actual) {
        assert.that(err, is.null());
        assert.that(actual[0].alias, is.equalTo('g'));
        assert.that(actual[0].url, is.equalTo('http://www.google.de'));
        assert.that(actual[1].alias, is.equalTo('h'));
        assert.that(actual[1].url, is.equalTo('http://www.heise.de/newsticker'));
        done();
      });
    });
  });

  suite('getBy', function () {
    test('returns a url for an existing alias.', function (done) {
      redirects.getBy('g', function (err, actual) {
        assert.that(err, is.null());
        assert.that(actual.url, is.equalTo('http://www.google.de'));
        done();
      });
    });

    test('returns an error for a non-existing alias.', function (done) {
      redirects.getBy('foo', function (err) {
        assert.that(err, is.not.null());
        done();
      });
    });
  });
});
