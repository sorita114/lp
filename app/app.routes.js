( function(){
  'use strict';

  angular
    .module( 'app.router' ,[
      'ui.router'
    ])
    .config( configBlock );

  //config block
  function configBlock ( $stateProvider , $urlRouterProvider ){
    $urlRouterProvider.otherwise( '/' );

    $stateProvider
      .state( 'main' , {
        url : '/',
        templateUrl : '/static_app/components/main/view.html',
        controller : 'MainController',
        controllerAs : 'mainCtrl'
      });
  }

})();
