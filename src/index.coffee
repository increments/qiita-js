Qiita = require '../kitchen/qiita'
Qiita.setToken = (token) -> Qiita._token = token
Qiita.setEndpoint = (endpoint) -> Qiita._endpoint = endpoint
Qiita.setRequester (method, api, params) ->
  # Retrieve token on fetch start
  {_token, _endpoint} = Qiita
  url = _endpoint + api
  fetching =
    if method is 'GET'
      query = (k + '=' + v for k, v of params).join('&')
      fetch(url + "?" + query,
        method: 'GET'
        headers:
          Authorization: 'Bearer ' + _token
          'Content-Type': 'application/json'
          Accept: 'application/json'
      )
    else
      url = _endpoint + api
      fetch(url,
        method: method
        headers:
          Authorization: 'Bearer ' + _token
          Accept: 'application/json'
          'Content-Type': 'application/json'
        body: JSON.stringify(params)
      )
  fetching
  .then (res) ->
    if parseInt(res.statusCode, 10) >= 400
      error = new Error 'qiita-js request error:' + method + ' ' +  url + ' ' + JSON.stringify(params) + '' + '\n' + res.body.error
      return Promise.reject(error)
    # res.body._header = res.header
    res.json()

module.exports = Qiita
