( function () {
  // body...
  'use strict';

  angular
    .module( 'app' , [
      'utils.config',
      'app.router'
    ])
    .config( configBlock )
    .run( runBlock );

  runBlock.$inject = [ '$rootScope', '$state' ];
  //config block
  function configBlock() {

  }

  //run block
  function runBlock( $rootScope, $state ) {
    $rootScope.$state = $state;
  }
})();
