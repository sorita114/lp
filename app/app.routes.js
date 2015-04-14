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
        url : '/main',
        templateUrl : '/static_app/components/main/main.html',
        controller : 'MainController',
        controllerAs : 'mainCtrl'
      });
  }

})();
