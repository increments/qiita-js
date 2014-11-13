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
tag2typeExpr = (expr) ->
  if expr.type
    switch expr.type
      when 'string' then 'string'
      when 'boolean' then 'boolean'
      when 'number' then 'number'
      when 'array'
        tag2typeExpr(expr.items)+'[]'
      else
        'any'
  else
    'any'

h.registerHelper 'tag2typeExpr', tag2typeExpr
template = h.compile('''
declare class {{classify name}} {
  {{#each properties}}
  public {{name}}: {{tag2typeExpr .}};
  {{/each}}
}
''')
compileToTS = (m) -> template m

# models
models =
  for prop, val of doc.properties
    new Prop prop, val

# m = models[0]
# console.log 'm', util.inspect m, false, null
# console.log compileToTS m

for m in models
  console.log compileToTS m
