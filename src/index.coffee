request = require 'superagent-promise'
Qiita = require '../kitchen/qiita'

Qiita.setToken = (token) -> Qiita._token = token
Qiita.setEndpoint = (endpoint) -> Qiita._endpoint = endpoint
Qiita.setUserAgent = (ua) -> Qiita._ua = ua

Qiita.setRequester (method, api, params) ->
  if !Promise?
    return new Promise.reject 'You should require promise or its shim'
  new Promise (done, reject) ->
    url = Qiita._endpoint+api
    req =
      if method is 'GET'
        request
        .get url
        .query params
      else
        request[method.toLowerCase()](url)
        .send params
    req
      .set Authorization: 'Bearer ' + Qiita._token
      .set 'Accept', 'application/json'
      .end()
      .then (error, res) ->
        if error then return reject(error)
        if parseInt(res.statusCode, 10) >= 400
          error = new Error 'qiita-js request error:' + method + ' ' +  url + ' ' + JSON.stringify(params) + '' + '\n' + res.body.error
          return reject error
        done(res.body)

      .catch (error) ->
        reject(error)

module.exports = Qiita
