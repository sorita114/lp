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

  configBlock.$inject = [ '$locationProvider', '$stateProvider', '$urlRouterProvider' ];

  //config block
  function configBlock ( $locationProvider, $stateProvider , $urlRouterProvider ){
    $locationProvider.html5Mode( true );
    $urlRouterProvider.otherwise( '/' );

    var homeState = {
      name : 'home',
      url : '/',
      templateUrl : '/app/components/home/homeView.html',
      controller : 'HomeController',
      controllerAs : 'homeCtrl',
      resolve : {
        getSkin : function( api, config, cookie, localstorage ) {

          var skins = localstorage.get( 'skins' ),
              promise = null;

          if( skins === null ) {
            promise = api.get( '/api/skins' );

            promise.then( function( resData ) {
              localstorage.set( 'skins', resData );
              cookie.set( 'skinVersion', config.get( 'skinVersion' ) );
            });
            return promise;
          } else {
            return JSON.parse( skins );
          }
        }
      }
    };

    var detailState = {
      name : 'detail',
      url : '/champion/:id',
      templateUrl : '/app/components/champion/championView.html',
      controller : 'ChampionController',
      controllerAs : 'championCtrl',
      resolve : {
        getChampion : function() {

        }
      }
    };

    $stateProvider.state( homeState );
    $stateProvider.state( detailState );

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
