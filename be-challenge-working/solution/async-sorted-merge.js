'use strict';

const _ = require('lodash'),
  Promise = require('bluebird');


module.exports = (logSources, printer) => {
  var promiseArr = [];
  popDrain( logSources );

  // Promise.all( promiseArr )
  //   .then( function( log ) {
  //     console.log( log[0] )
      // _.sortBy( promiseArr, 'last.date' );
    // });

  function popDrain( items ) {
    var i = 0;

    while ( i < items.length ) {
      items[i].popAsync()
        .then( function( item ){
          promiseArr.push(item)
          if ( !items[i].drained ) {
            popDrain( items[i] );
          } else {
            i++;
          }
        });  
    }
  }
}