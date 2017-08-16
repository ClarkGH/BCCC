'use strict'

module.exports = (logSources, printer) => {

  for ( var i = 0; i < logSources.length; i++ ) {
    printer.print(logSources[i].last);
  }
}