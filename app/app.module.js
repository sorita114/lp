( function () {
  // body...
  'use strict';

  angular
    .module( 'app' , [
      'app.router'
    ])
    .config( configBlock )
    .run( runBlock )
    .directive( 'layerPopup', layerPopupDirective );


  //config block
  function configBlock() {

  }

  //run block
  function runBlock() {

  }

  function layerPopupDirective() {
     return {
       link : function( scope, element, attrs ) {
         scope.close = function() {
           element.remove();
         };
       },
       template : '<div class="layer-popup">' +
           '<div class="content">' +
             '<div class="header">' +
               '<button type="button" class="close" ng-click="close()"><span>&times;</span></button>' +
               '<h4 class="title" ng-bind="title"></h4>' +
             '</div>' +
             '<div class="body" ng-bind-html="content"></div>' +
           '</div>' +
         '</div>'
     }
  }
})();
