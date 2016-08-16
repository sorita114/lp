( function(){
  'use strict';

  angular
    .module( 'app.router' ,[
      'ui.router'
    ])
    .config( configBlock );

  configBlock.$inject = [ '$stateProvider', '$urlRouterProvider' ];

  //config block
  function configBlock ( $stateProvider , $urlRouterProvider ){
    $urlRouterProvider.otherwise( '/' );

    var homeState = {
      name : 'home',
      url : '/',
      templateUrl : '/static_app/components/home/homeView.html',
      controller : 'HomeController',
      controllerAs : 'homeCtrl',
      resolve : {
        getSkin : function( homeService ) {
          return homeService.getSkin();
        }
      }
    };

    $stateProvider.state( homeState );

    // $stateProvider
    //   .state( 'home' , {
    //     url : '/',
    //     templateUrl : '/static_app/components/home/homeView.html',
    //     controller : 'HomeController',
    //     controllerAs : 'homeCtrl',
    //     resolve : {
    //       getSkin : function( homeService ) {
    //         return homeService.getSkin();
    //       }
    //     }
    //   })
    //   .state( 'champions', {
    //      url : '/champions',
    //      templateUrl : '/static_app/components/champions/list.html',
    //      controller : 'ListController',
    //      controllerAs : 'listCtrl',
    //      resolve : {
    //        getChampion : function( ChampionFactory ) {
    //            return ChampionFactory.get();
    //        }
    //      }
    //  })
    //  .state( 'champion', {
    //     url : '/champion/:id',
    //     templateUrl : '/static_app/components/champions/view.html',
    //     controller : 'ViewController',
    //     controllerAs : 'viewCtrl',
    //     resolve : {
    //         getChampion : function( ChampionFactory , $stateParams ) {
    //             return ChampionFactory.get( $stateParams.id );
    //         }
    //     }
    // });
  }

})();
