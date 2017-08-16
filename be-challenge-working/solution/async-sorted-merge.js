'use strict';

const _ = require('lodash'),
  Promise = require('bluebird');


module.exports = (logSources, printer) => {
  var promiseArr = [];

  logSources.forEach(function ( item ) {
    promiseArr.push(item.popAsync());
  });

  Promise.all( promiseArr )
    .then( function( log ) {
      _.sortBy( logSources, 'last.date' );
      console.log( log );
    });
}