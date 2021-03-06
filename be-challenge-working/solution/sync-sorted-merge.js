'use strict';

const _ = require('lodash');

module.exports = ( logSources, printer ) => {
  var i = 0,
    sortedArr = [];

  while ( i < logSources.length ) {
    logSources[i].pop();     
    i++;
  }

  sortedArr = _.sortBy( logSources, 'last.date' );
  sortedArr.forEach( ( sortedLogSource ) => {
    printer.print( sortedLogSource.last );
  });

  printer.done();
}