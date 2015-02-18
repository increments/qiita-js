global.Promise = require 'bluebird'
{ok} = require 'assert'
{token} = require './token.json'

describe 'Qiita', ->
  it 'should request by get request to qiita', (done) ->
    Qiita = require '../src/index'
    Qiita.setToken token
    Qiita.setEndpoint 'https://qiita.com/'
    Qiita.Resources.User.get_user('mizchi')
    .then (data) ->
      ok data.id is 'mizchi'
      done()

  it 'should request by post request to qiita', (done) ->
    Qiita = require '../src/index'
    Qiita.setToken token
    Qiita.setEndpoint 'https://qiita.com/'
    Qiita.Resources.Item.create_item(
      title: 'test'
      body: 'test'
      tags: [{name: 'test'}]
      private: true
    )
    .then (data) ->
      console.log 'result', data
      done()
