(function() {
  'use strict';

  angular
    .module( 'app' )
    .service( 'MainService', MainService )
    .factory( 'api' , api );

  api.$inject = [ '$http', '$q' ];

  function MainService() {
    var _this = this;

    _this.getSkinUrl = getSkinUrl;
    _this.getSpellUrl = getSpellUrl;

    function getSkinUrl( version ) {
      return 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion';
    }

    function getSpellUrl( version ) {
      return 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/spell';
    }
  }

  function api( $http, $q ) {
    var services = {
      get : get
    };

    return services;

    function get( url ) {
      var deferred = $q.defer();

      if( url === undefined ) { return false; }

      $http.get( url )
        .success( function( data, status, headers, config ) {
          var d = [];
          for( var prop in data.data ) {
            d.push( data.data[ prop ] );
          }

          deferred.resolve( d );
        })
        .error( function( data, status ) {
          deferred.reject( data );
        });

      return deferred.promise;
    }
  }
})();
