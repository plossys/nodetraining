'use strict';

var data = require('./data.json');

var redirects = {
  // contains: function (alias, callback) {
  //   callback(null, !!data[alias]);
  // },

  getAll: function (callback) {
    var result = [];

    for (var alias in data) {
      if (data.hasOwnProperty(alias)) {
        result.push({
          alias: alias,
          url: data[alias]
        });
      }
    }

    callback(null, result);
  },

  getBy: function (alias, callback) {
    if (!data[alias]) {
      return callback(new Error('Alias not found.'));
    }
    callback(null, data[alias]);
  }

};

module.exports = redirects;
