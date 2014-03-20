'use strict';

var path = require('path');

var Datastore = require('nedb');

var db = {
  redirects: new Datastore({
    filename: path.join(__dirname, 'redirects.json'),
    autoload: true
  })
};

// db.redirects.insert({ alias: 'w', url: 'http://www.wikipedia.de' }, function () {});
// db.redirects.insert({ alias: 'e', url: 'http://www.ebay.de' }, function () {});

var redirects = {
  // contains: function (alias, callback) {
  //   callback(null, !!data[alias]);
  // },

  getAll: function (callback) {
    db.redirects.find({}, callback);
  },

  getBy: function (alias, callback) {
    db.redirects.findOne({ alias: alias }, function (err, redirect) {
      if (err) {
        return callback(err);
      }
      callback(null, redirect.url);
    });
  }
};

module.exports = redirects;
