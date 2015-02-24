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

  # This test need items more than 2
  it 'should send get query parameters', ->
    Qiita = require '../src/index'
    Qiita.setToken token
    Qiita.setEndpoint 'https://qiita.com/'

    Qiita.Resources.Item.list_user_items('mizchi', {per_page: 1, page: 1})
    .then (result1) ->
      # Qiita.Resources.Item.list_user_items('mizchi', {per_page: 2})
      Qiita.Resources.Item.list_user_items('mizchi', {per_page: 1, page: 2})
      .then (result2) ->
        ok result1[0].title isnt result2[0].title
