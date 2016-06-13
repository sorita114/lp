( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'MainController' , MainController );

  function MainController( $scope, getSkin ) {
      $scope.items = getSkin;

      console.log( $scope.items );
  }

})();
