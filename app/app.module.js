( function () {
  // body...
  'use strict';

  angular
    .module( 'app' , [
      'app.router',
      'infinite-scroll'
    ])
    .config( configBlock )
    .run( runBlock )
    .controller( 'AppController' , AppController );

  //config block
  function configBlock() {

  }

  //run block
  function runBlock() {

  }

  //app controller
  AppController.$inject = [];

  function AppController() {
    // body...

  }
})();
