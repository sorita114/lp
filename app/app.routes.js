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
        getSkin : [ 'api', 'config', 'cookie', 'localstorage', function( api, config, cookie, localstorage ) {

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
        }]
      }
    };

    var detailState = {
      name : 'detail',
      url : '/champion/:id',
      templateUrl : '/app/components/champion/championView.html',
      controller : 'ChampionController',
      controllerAs : 'championCtrl',
      resolve : {
        getChampion : [ '$stateParams', 'logger', 'api', function( $stateParams, logger, api ) {
          return api.get( '/api/champion/' + $stateParams.id );
        }]
      }
    };

    $stateProvider.state( homeState );
    $stateProvider.state( detailState );
  }

})();
