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

  runBlock.$inject = [ '$rootScope', '$state', 'UtilsConfigService', 'UtilsLogService', 'UtilsCookieService', 'UtilsLocalStorageService' ];
  //config block
  function configBlock() {

  }

  //run block
  function runBlock( $rootScope, $state, UtilsConfig, UtilsLog, UtilsCookie, UtilsLocalStorage ) {
    $rootScope.$state = $state;

    UtilsLog.log( 'run' );

    var configSkinVersion = UtilsConfig.get( 'skinVersion' ),
        currentSkinVersion = UtilsCookie.get( 'skinVersion' );

    UtilsLog.log( 'configSkinVersion :' + configSkinVersion );
    UtilsLog.log( 'currentSkinVersion :' + currentSkinVersion );

    if( configSkinVersion !== currentSkinVersion && UtilsLocalStorage.get( 'skins' ) !== null ) {
      UtilsLocalStorage.remove( 'skins' );
      UtilsCookie.set( 'skinVersion', configSkinVersion );
    }
  }
})();
