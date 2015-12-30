( function() {
  'use strict';

  angular
    .module( 'app' )
    .factory( 'ChampionFactory' , ChampionFactory );

    ChampionFactory.$inject = [ '$http', '$q' ];

  function ChampionFactory( $http , $q ) {
    return {
        get : function( id ) {
            var url = '../api',
                deferred = $q.defer();

            if( id ) {
                url = url + '/champion/' + id;
            } else {
                url = url + '/champions';
            }
            $http.get( url )
                .success( function( data, status, headers, config ) {
                    deferred.resolve( data );
                })
                .error( function( data, status ) {
                    deferred.reject( data );
                });

            return deferred.promise;
        }
    };
  }
})();
