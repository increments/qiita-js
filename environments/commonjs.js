Qiita.setToken = function(token){
  Qiita._token = token;
}

Qiita.setEndpoint = function(endpoint){
  Qiita._endpoint = endpoint;
}

Qiita._endpoint = 'https://qiita.com';

var Promise = require('bluebird')
var request = require('request');
var qs = require('qs');

Qiita.setRequester(function(method, endpoint, params){
  return new Promise(function(done){
    var options = {
      url: Qiita._endpoint+endpoint,
      method: method,
      json: true,
      headers: {
        "Authorization": 'Bearer '+Qiita._token
      }
    };

    if(method === 'GET'){
      options.url += '?' + qs.stringify(params);
    } else {
      options.form = params;
    }

    request(options, function(err, res, body){
        done(body);
    });
  });
});
module.exports = Qiita;
