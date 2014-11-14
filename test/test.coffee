{ok} = require 'assert'
{token} = require './token.json'

describe 'Qiita', ->
  it 'should request to qiita', (done) ->
    Qiita = require '../dist/qiita-commonjs'
    Qiita.setToken token
    Qiita.Resources.User.get_user('mizchi').then (data) ->
      ok data.id is 'mizchi'
      done()
