'use strict'

const _ = require('lodash');

module.exports = (logSources, printer) => {
  var newArr = [];

  for ( var i = 0; i < logSources.length; i++ ) {
    console.log( logSources[i].pop() ); 
  }

}