( function () {
  // body...
  'use strict';

  angular
    .module( 'app' , [
      'utils.config',
      'utils.log',
      'utils.cookie',
      'utils.localstorage',
      'app.router'
    ])
    .config( configBlock )
    .run( runBlock );

  runBlock.$inject = [ '$rootScope', '$state', 'config', 'logger', 'cookie', 'localstorage' ];
  //config block
  function configBlock() {

  }

  //run block
  function runBlock( $rootScope, $state, config, logger, cookie, localstorage ) {
    $rootScope.$state = $state;

    logger.log( 'run' );

    var configSkinVersion = config.get( 'skinVersion' ),
        currentSkinVersion = cookie.get( 'skinVersion' );

    logger.log( 'configSkinVersion :' + configSkinVersion );
    logger.log( 'currentSkinVersion :' + currentSkinVersion );

    if( configSkinVersion !== currentSkinVersion && localstorage.get( 'skins' ) !== null ) {
      localstorage.remove( 'skins' );
      cookie.set( 'skinVersion', configSkinVersion );
    }
  }
})();
