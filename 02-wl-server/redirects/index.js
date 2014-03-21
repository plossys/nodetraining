var data = require ('./data.json');

var redirects = {
  contains : function(alias, callback){
if (!redirects[alias]) {
    callback(null, false);
    return;
  }
  callback(null, true);
  return;
},

getAll: function(callback){
    var allRedirects = [];
    for (var alias in data){
    allRedirects.push({
      alias: alias, 
      url: data[alias]
    });
    }

    callback(null, allRedirects);
},

getBy: function(alias, callback) {
if (!data[alias]){
return callback(new Error('No alias found for ' + alias));

}
callback(null, data[alias]);


}

}
module.exports = redirects ;
