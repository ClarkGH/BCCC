'use strict'

module.exports = (logSources, printer) => {
  printer.print( logSources[0].pop() );
  printer.done();
}