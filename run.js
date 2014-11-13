#!/usr/bin/env node

require('coffee-script/register');
var tsifier = require('./schema-tsifier');
var argv = require('optimist')
  .argv;

var filename = argv._[0];
var namespace = argv._[1];
if(!namespace) namespace = 'Entities';
console.log('tsifier', filename);
tsifier(filename, namespace);
