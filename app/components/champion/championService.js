(function() {
  'use strict';

  angular
    .module( 'app' )
    .factory( 'ChampionService', ChampionService );

  ChampionService.$inject = [ '$http', '$q' ];

  function ChampionService( $http, $q ) {
    var services = {
      getChampion : getChampion
    };

    return services;

    function getChampion( id ) {
      var url = '../api/champion/' + id,
          deferred = $q.defer();

      $http.get( url )
        .success( function( data, status, headers, config ) {
            var d = [];
            for( var prop in data.data ) {
                d.push( data.data[ prop] );
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
