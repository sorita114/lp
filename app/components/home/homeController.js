( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'HomeController' , HomeController );

  HomeController.$inject = [ '$scope', '$compile', 'getSkin' ];

  function HomeController( $scope, $compile, getSkin ) {
    var _this = this;

    _this.items = getSkin;
    _this.skinId = null;
    _this.selectedTitle = '';
    _this.selectedSkins = [];

    _this.showDialog = function( id ) {
      var data = _this.items.filter( function( v ) { return v.id === id; })[0];

      _this.selectedTitle = data.key;
      _this.selectedSkins = data.skins;

      $( 'body' ).append( $compile( '<carousel carousel-title="homeCtrl.selectedTitle" carousel-data="homeCtrl.selectedSkins"></carousel>' )( $scope ) );
    };
  }
})();
