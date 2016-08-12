(function() {
  'use strict';

  angular
    .module( 'app' )
    .directive( 'dialog' , Dialog );

    function Dialog() {
       return {
         link : function( scope, element, attrs ) {
           element.show();
           scope.close = function() {
             element.remove();
           };
         },
         templateUrl : '/static_app/components/shared/dialog/dialogView.html'
       };
    }
})();
