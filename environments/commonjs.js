Qiita.setToken = function(token){
  Qiita._token = token;
}

Qiita.setEndpoint = function(endpoint){
  Qiita._endpoint = endpoint;
}

Qiita._endpoint = 'https://qiita.com';
var Promise = require('bluebird')
var r = require('request-json');

Qiita.setRequester(function(method, endpoint, params){
  return new Promise(function(done){
    var cli = r.newClient(Qiita._endpoint);
    cli.headers.Authorization = 'Bearer '+Qiita._token;

    var m = method.toLowerCase()
    if(m === 'delete') m = 'del';
    if(m === 'get') params = {qs: params};

    cli[m](endpoint, params, function(err, resp, body){
      done(body);
    })
  });
});

module.exports = Qiita;
