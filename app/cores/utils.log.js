(function() {
  'use strict';

  angular
    .module( 'utils.log', [
      'utils.config'
    ])
    .factory( 'logger', logger );

  logger.$inject = [ 'config' ];

  function logger( config ) {
    var services = {
      log : log
    };

    return services;
    
    function log( obj ) {
      var useLog = config.get( 'useLog' ) === true && window.console !== undefined;

      if( useLog ) {
        if( typeof obj === 'object' && console.dir !== undefined ) {
          console.dir( obj );
        } else {
          console.log( obj );
        }
      }
    };
  }
})();
