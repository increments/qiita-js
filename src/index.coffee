request = require 'superagent'
Qiita = require '../kitchen/qiita'

Qiita.setToken = (token) -> Qiita._token = token
Qiita.setEndpoint = (endpoint) -> Qiita._endpoint = endpoint
Qiita.setRequester (method, api, params) ->
  unless Qiita._token?
    return new Promise.reject 'you should set token by Qiita.setToken(<your token>)';
  if !Promise? and !callback?
    return new Promise.reject 'You should require promise or its shim'
  new Promise (done, reject) ->
    url = Qiita._endpoint+api
    req =
      if method is 'get'
        request.get url
        .query params
      else
        request[method.toLowerCase()] url
        .send params
    req
      .set Authorization: 'Bearer ' + Qiita._token
      .set 'Accept', 'application/json'
      .end (error, res) ->
        if error then return reject(error)
        if parseInt(res.statusCode, 10) >= 400 then return reject(res.error)
        done(res.body)

module.exports = Qiita
