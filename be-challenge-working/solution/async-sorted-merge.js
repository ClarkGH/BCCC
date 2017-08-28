'use strict';

const _ = require( 'lodash' ),
  Promise = require( 'bluebird' );


module.exports = ( logSources, printer ) => {
  Promise.each( logSources, ( logSource ) => {
    logSource.popAsync();
  }).then( ( poppedLogSources ) => {
      var sortedSources = _.sortBy( poppedLogSources, ( logSourcePopped ) => {
        return (logSourcePopped.last.date)
      });
      sortedSources.forEach( ( sortedLogSource ) => {
        printer.print( sortedLogSource.last );
      });
    }).then( () => {
      printer.done();
    }).catch( ( error ) => {
      console.log('There was an error: ' + error );
    });
}