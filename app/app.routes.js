( function(){
  'use strict';

  angular
    .module( 'app.router' ,[
      'ui.router',
      'utils.config',
      'utils.log',
      'utils.cookie',
      'utils.localstorage'
    ])
    .config( configBlock );

  configBlock.$inject = [ '$stateProvider', '$urlRouterProvider' ];

  //config block
  function configBlock ( $stateProvider , $urlRouterProvider ){
    $urlRouterProvider.otherwise( '/' );

    var homeState = {
      name : 'home',
      url : '/',
      templateUrl : '/app/components/home/homeView.html',
      controller : 'HomeController',
      controllerAs : 'homeCtrl',
      resolve : {
        getSkin : function( HomeService, UtilsConfigService, UtilsLogService, UtilsCookieService, UtilsLocalStorageService ) {

          var skins = UtilsLocalStorageService.get( 'skins' ),
              promise = null;

          if( skins === null ) {
            promise = HomeService.getSkin();
            
            promise.then( function( resData ) {
              UtilsLocalStorageService.set( 'skins', resData );
              UtilsCookieService.set( 'skinVersion', UtilsConfigService.get( 'skinVersion' ) );
            });
            return promise;
          } else {
            return JSON.parse( skins );
          }
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
