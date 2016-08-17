(function( window ) {
  'use strict';

  angular
    .module( 'utils.localstorage', [])
    .service( 'UtilsLocalStorageService', UtilsLocalStorageService );

  function UtilsLocalStorageService() {
    var _this = this;

    _this.get = get;
    _this.set = set;
    _this.remove = remove;
  }

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
})( window );
