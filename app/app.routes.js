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
      })
      .state( 'champions', {
         url : '/champions',
         templateUrl : '/static_app/components/champions/view.html',
         controller : 'ChampionController',
         controllerAs : 'championCtrl',
         resolve : {
             getChampion : function( ChampionFactory ) {
                 return ChampionFactory.get();
             }
         }
     });
  }

})();
