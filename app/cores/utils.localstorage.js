(function( window ) {
  'use strict';

  angular
    .module( 'utils.localstorage', [
      'utils.cookie'
    ])
    .service( 'UtilsLocalStorageService', UtilsLocalStorageService );

  UtilsLocalStorageService.$inject = [ 'UtilsCookieService' ];

  function UtilsLocalStorageService( UtilsCookie ) {
    var _this = this,
        isSupportLocalStorage = ( window.localStorage === 'undefined' ? false : true );

    _this.get = ( isSupportLocalStorage ? get : UtilsCookie.get );
    _this.set = ( isSupportLocalStorage ? set : UtilsCookie.set );
    _this.remove = ( isSupportLocalStorage ? remove : UtilsCookie.remove );
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
