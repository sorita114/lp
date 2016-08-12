(function() {
  'use strict';

  angular
    .module( 'app' )
    .directive( 'carousel', carousel );

  carousel.$inject = [ '$sce' ];

  function carousel( $sce ) {
    return {
      scope : {
        carouselTitle : '=',
        carouselData : '='
      },
      link : function( scope, element ) {
        element.find( '.carousel' ).carousel();
      },
      templateUrl : '/static_app/components/shared/carousel/carouselView.html'
    };
  }
})();
