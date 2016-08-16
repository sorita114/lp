(function() {
  'use strict';

  angular
    .module( 'utils.log', [
      'utils.config'
    ])
    .service( 'UtilsLogService', UtilsLogService );

  UtilsLogService.$inject = [ 'UtilsConfigService' ];

  function UtilsLogService( UtilsConfig ) {
    this.log = function( obj ) {
      var useLog = UtilsConfig.get( 'useLog' ) === true && window.console !== undefined;

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
