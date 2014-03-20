'use strict';

var data = require('./data.json');

var redirects = {
  // contains: function (alias, callback) {
  //   callback(null, !!data[alias]);
  // },

  getAll: function (callback) {
    var redirects = [];

    for (var alias in data) {
      if (data.hasOwnProperty(alias)) {
        redirects.push({ alias: alias, url: data[alias] });
      }
    }

    callback(null, redirects);
  },

  getBy: function (alias, callback) {
    if (!data[alias]) {
      return callback(new Error('Alias not found.'));
    }
    callback(null, data[alias]);
  }
};

module.exports = redirects;
