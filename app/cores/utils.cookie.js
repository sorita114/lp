(function() {
  'use strict';

  angular
    .module( 'utils.cookie', [])
    .service( 'UtilsCookieService', UtilsCookieService );

  function UtilsCookieService() {
    this.get = get;
    this.set = set;
    this.remove = remove;
    this.has = has;
    this.keys = keys;

    function get( key ) {
      if( !key ) {
        return null;
      }

      var cookie = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || null;
      
      if(cookie) {
          try {
              cookie = decodeURIComponent(cookie);
          } catch(e) {
              cookie = decodeURIComponent(unescape(cookie)); // escape 처리된 문자열이 저장된 경우, catch.
          }
      }

      return cookie;
    }

    function set( key, value, end, path, domain, secure ) {

    }

    function remove( key ) {

    }

    function has( key ) {

    }

    function keys() {

    }
  }
})();
