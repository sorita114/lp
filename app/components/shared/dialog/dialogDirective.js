(function() {
  'use strict';

  angular
    .module( 'app' )
    .directive( 'dialog' , dialog );

  dialog.$inject = [ '$sce' ];

  function dialog( $sce ) {
     return {
       scope : {
         title : '=',
         content : '='
       },
       link : function( scope, element, attrs ) {
         element.show();
         console.log( scope );
         scope.close = function() {
           element.remove();
         };
         scope.bindHtml = function() {
           return $sce.trustAsHtml( scope.content );
         };
       },
       templateUrl : '/app/components/shared/dialog/dialogView.html'
     };
  }
})();
