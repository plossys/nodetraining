'use strict';

var reqlogger = function(options) {
  return function (req, res, next) {
    console.log(options.level + ': ' + req.method + ' ' + req.url)
    next();
  };
};

module.exports = reqlogger;
