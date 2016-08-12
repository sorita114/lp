( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'HomeController' , HomeController );

  function HomeController( $scope, $compile, $sce, $timeout, getSkin ) {
    $scope.dialogContent = null;
    $scope.items = getSkin;
    $scope.viewClass = 'main-view';
    $scope.skinId = null;
    $scope.showDialog = function( id ) {
      var data = $scope.items.filter( function( v ) { return v.id === id; })[0];

      var key = data.key,
          skins = data.skins,
          skinHtml = '<div class="carousel" id="skinsSlide"><div class="carousel-inner">',
          controlHtml = '<a class="left carousel-control" href="#skinsSlide" role="button" data-slide="prev">'+
          '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>'+
          '<span class="sr-only">Previous</span>'+
          '</a>'+
          '<a class="right carousel-control" href="#skinsSlide" role="button" data-slide="next">' +
            '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'+
            '<span class="sr-only">Next</span>'+
          '</a>';

      for( var i = 0, len = skins.length; i < len ; i++ ) {
        skinHtml = skinHtml + '<div class="item ' + ( i === 0 ? 'active' : '')+ '"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+ key + '_' + skins[ i ].num + '.jpg" style="margin:0 auto"></div>';
      }

      skinHtml = skinHtml + '</div>' + controlHtml + '</div>';

      $scope.title = data.name;
      $scope.content = $sce.trustAsHtml( skinHtml );
      $timeout( function() {
        $( '.layer-popup' ).find( '.carousel' ).carousel();
      }, 500 );
      $( 'body' ).append( $compile( '<dialog></dialog>' )( $scope ) );
    };
  }
})();
