'use strict';

var assert = require('node-assertthat');

var redirects = require('../../redirects');

suite('redirects', function () {
  suite('getAll', function () {
    test('returns all redirects.', function (done) {
      redirects.getAll(function (err, data) {
        assert.that(err, is.null());
        assert.that(data, is.equalTo([
            { alias: 'g', url: 'http://www.google.de' },
            { alias: 'h', url: 'http://www.heise.de/newsticker' }
        ]));
        done();
      });
    });
  });

  suite('getBy', function () {
    test('return heise.', function (done) {
      redirects.getBy('h', function (err, alias) {
        assert.that(err, is.null());
        assert.that(alias, is.equalTo('http://www.heise.de/newsticker'));
        done();
      });
    });

    test('return undefined.', function (done) {
      redirects.getBy('notfound', function (err, alias) {
        assert.that(err, is.not.null());
        assert.that(alias, is.undefined());
        done();
      });
    });
  });

});

