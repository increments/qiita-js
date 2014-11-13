searchRef = (indexes, path) ->
  if path[0] is '#'
    indexes[path]
  else
    throw 'TODO: relative path'+path

module.exports =
class Property
  constructor: (indexes, @name, expr)->
    if expr.$ref
      expr = searchRef indexes, expr.$ref
    if expr.properties
      @properties =
        for propName, expr of expr.properties
          new Property indexes, propName, expr
    else if expr.type
      @type = expr.type
      if @type is 'array'
        @items =
          if expr.items.properties
            for propName, expr of expr.items.properties
              new Property indexes, propName, expr
          else
            expr.items
