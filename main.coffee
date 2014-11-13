yaml = require 'js-yaml'
fs = require 'fs'
util = require 'util'
_ = require 'lodash'

traverse = do ->
  flattened = {}
  (tree, path = '#') ->
    flattened[path] = tree
    for own k, v of tree when typeof v isnt 'string'
      ns = path+'/'+k
      traverse v, ns
    flattened

doc = yaml.safeLoad(fs.readFileSync('schema.yml', 'utf8'))
inversedIndexes = traverse doc

searchRef = (path) ->
  if path[0] is '#'
    inversedIndexes[path]
  else
    throw 'TODO: relative path'+path

class Prop
  constructor: (@name, expr)->
    if expr.$ref
      expr = searchRef expr.$ref

    if expr.properties
      @properties =
        for propName, expr of expr.properties
          new Prop propName, expr
    else if expr.type
      @type = expr.type
      if @type is 'array'
        @items =
          if expr.items.properties
            for propName, expr of expr.items.properties
              new Prop propName, expr
          else
            expr.items

changeCase = require 'change-case'
h = require 'handlebars'
h.registerHelper 'classify', (name) -> changeCase.pascalCase name

getTypeName = (expr) ->
  if expr.type.length is 2
    [a, b] = expr.type
    isNullable = a is 'null' or b is 'null'
    if isNullable
      "#{expr.name}?"
    else
      expr.name
  else
    expr.name

getTypeExpr = (expr) ->
  # TODO Fixme
  if expr.type is undefined
    expr = type: expr

  type =
    if typeof expr.type isnt 'string' and expr.type.length is 2
      [a, b] = expr.type
      if a is 'null'
        b
      else if b is 'null'
        a
      else
        'any'
    else
      expr.type

  switch type
    when 'array'
      getTypeExpr(expr.items)+'[]'
    when 'string'
      "string"
    when 'boolean'
      "boolean"
    when 'number', 'integer'
      'number'
    else
      'any'

tag2typeExpr = (expr) ->
  if expr.type
    typeName = getTypeName(expr)
    typeExpr = getTypeExpr(expr)
    "#{typeName}: #{typeExpr}"
  else if expr.properties
    exprs =
      for i in expr.properties
        tag2typeExpr i
    expr.name + ': {' + exprs.join('; ') + '}'
  else
    "#{expr.name}: any"

h.registerHelper 'tag2typeExpr', tag2typeExpr
h.registerHelper 'argnize', (properties, depth = 2) ->
  depth = parseInt depth, 10
  # header = ''
  header = (' ' for i in [1..depth]).join ''
  properties.map((i) -> header + 'public ' + tag2typeExpr i).join ',\n'

template = h.compile('''
declare module Qiita.Entities {

  {{#each models}}
  export interface {{classify name}}{
  {{#each properties}}
    {{tag2typeExpr .}};
  {{/each}}
  }

  {{/each}}
}
''')

compileToTS = (m) -> template m

models =
  for prop, val of doc.properties
    new Prop prop, val

console.log compileToTS models: models
