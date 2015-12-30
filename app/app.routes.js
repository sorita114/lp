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
        controllerAs : 'mainCtrl',
        resolve : {
          getSkin : function( MainFactory ) {
            return MainFactory.get();
          }
        }
      })
      .state( 'champions', {
         url : '/champions',
         templateUrl : '/static_app/components/champions/list.html',
         controller : 'ListController',
         controllerAs : 'listCtrl',
         resolve : {
           getChampion : function( ChampionFactory ) {
               return ChampionFactory.get();
           }
         }
     })
     .state( 'champion', {
        url : '/champion/:id',
        templateUrl : '/static_app/components/champions/view.html',
        controller : 'ViewController',
        controllerAs : 'viewCtrl',
        resolve : {
            getChampion : function( ChampionFactory , $stateParams ) {
                return ChampionFactory.get( $stateParams.id );
            }
        }
    });
  }

})();
