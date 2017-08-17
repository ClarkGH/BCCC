'use strict';

const _ = require('lodash'),
  Promise = require('bluebird');


module.exports = (logSources, printer) => {
  var logArr = [];

  logSources.forEach( popper );

  function popper( logSource ) {
    logSource.popAsync()
      .then( function( val ) {
        // console.log(logSource)
        logArr.push(val);
      });
  }

  

}