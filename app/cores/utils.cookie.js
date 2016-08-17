(function( document ) {
  'use strict';

  angular
    .module( 'utils.cookie', [])
    .service( 'UtilsCookieService', UtilsCookieService );

  function UtilsCookieService() {
    var _this = this;

    _this.get = get;
    _this.set = set;
    _this.remove = remove;
    _this.has = has;
    _this.keys = keys;

    function get( key ) {
      if( !key ) {
        return null;
      }

      var cookie = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent( key ).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || null;

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
      if( !key || /^(?:expires|max\-age|path|domain|secure)$/i.test( key ) ) {
        return false;
      }
      var expires = "";

      end = ( end === undefined ? 1 : end );
      path = ( path === undefined ? '/' : path );

      if( end ) {
        switch( end.constructor ) {
          case Number:
              expires = end === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + end * 60 * 60 * 24;
              break;
          case String:
              expires = "; expires=" + end;
              break;
          case Date:
              expires = "; expires=" + end.toUTCString();
              break;
        }
      }

      document.cookie = encodeURIComponent( key ) + "=" + encodeURIComponent( value ) + expires + ( domain ? "; domain=" + domain : "" ) + ( path ? "; path=" + path : "" ) + ( secure ? "; secure" : "" );
      return true;
    }

    function remove( key, path, domain ) {
      if( !_this.has( key ) ) {
        return false;
      }
      path = path === undefined ? '/' : path;

      document.cookie = encodeURIComponent( key ) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( domain ? "; domain=" + domain : "" ) + ( path ? "; path=" + path : "" );
      return true;
    }

    function has( key ) {
      if( !key ) {
        return false;
      }
      return ( new RegExp("(?:^|;\\s*)" + encodeURIComponent( key ).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test( document.cookie );
    }

    function keys() {
      var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
      for( var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++ ) {
          aKeys[nIdx] = decodeURIComponent( aKeys[nIdx] );
      }
      return aKeys;
    }
  }
})( document );
