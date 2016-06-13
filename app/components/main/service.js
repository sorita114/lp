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
    };
  }
})();
