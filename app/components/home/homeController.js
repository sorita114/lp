( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'HomeController' , HomeController );

  function HomeController( $scope, $compile, $sce, $timeout, getSkin ) {
    //console.log( $scope );

    $scope.items = getSkin;
    $scope.viewClass = 'main-view';
    $scope.skinId = null;
    $scope.selectedTitle = '';
    $scope.selectedSkins = [];
    $scope.showDialog = function( id ) {
      var data = $scope.items.filter( function( v ) { return v.id === id; })[0];

      $scope.selectedTitle = data.key;
      $scope.selectedSkins = data.skins;

      $( 'body' ).append( $compile( '<carousel carousel-title="selectedTitle" carousel-data="selectedSkins"></carousel>' )( $scope ) );
    };
  }
})();
