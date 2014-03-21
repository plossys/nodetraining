'use strict';

var assert = require('node-assertthat');
var redirects = require('../../redirects');

suite ('redirects', function(){
  suite('getAll', function(){
    test('returns All Redirects', function(done){
      redirects.getAll(function(err, actual){
        assert.that(err, is.null());
        assert.that(actual, is.equalTo([
          {alias: 'g', url: 'http://www.google.de'},
          {alias: 'w', url: 'http://www.wikipedia.de'},
          ]));
        done();
      }); //redirects.getAll
    }); // test
  }) //suite getAll

  suite('getBy', function(){
    test('getBy with empty name', function(done){
      redirects.getBy("", function(err, result){
        assert.that(err, is.not.null());
        done();
      })
    }); //test getBy
  }); // suite getBy

}); //suite redirects

