'use strict';

var path = require('path');

var Datastore = require('nedb');

var db = {
  redirects: new Datastore({
    filename: path.join(__dirname, 'redirects.json'),
    autoload: true
  })
};

// db.redirects.insert({ alias: 'g', url: 'http://www.google.de' }, function () {});
// db.redirects.insert({ alias: 'h', url: 'http://www.heise.de/newsticker' }, function () {});

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
      if (!redirect) {
        return callback(new Error('not found'), redirect);
      }
      callback(null, redirect);
    });
  }
};

module.exports = redirects;
