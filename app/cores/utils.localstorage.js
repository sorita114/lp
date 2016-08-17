(function( window ) {
  'use strict';

  angular
    .module( 'utils.localstorage', [])
    .factory( 'localstorage', localstorage );

  function localstorage() {
    var services = {
      get : get,
      set : set,
      remove : remove
    };

    return services;

    function get( key ) {
      return localStorage.getItem( key );
    }

    function set( key, value ) {
      var str = Array.isArray( value ) ? JSON.stringify( value ) : value;

      if(localStorage.key( key )) {
          localStorage.removeItem( key );
      }

      localStorage.setItem( key, str );
    }

    function remove( key ) {
      localStorage.removeItem( key );
    }  
  }
})( window );
