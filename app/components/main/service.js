( function() {
  'use strict';

  angular
    .module( 'app' )
    .factory( 'MainFactory' , MainFactory );

    MainFactory.$inject = [ '$http', '$q' ];

  function MainFactory( $http, $q ) {
    return {
      getSkin : function() {
        var url = '../api/skins',
            deferred = $q.defer();

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
