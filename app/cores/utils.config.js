(function() {
  'use strict';

  var _defaults = {
    useLog : { editable : true, value : true },
    root : { editable : true, value : '/' },
    contextPath : { editable : true, value : '/' },
    appPath : { editable : true, value : '/static_app' },
    stylePath : { editable : true, value : '/static_style' },
    skinVersion : { editable : true, value : '6.16.2' }
  };

  angular
    .module( 'utils.config', [])
    .constant( 'defaults', _defaults)
    .factory( 'UtilsConfigService', UtilsConfigService );

  UtilsConfigService.$inject = [ 'defaults' ];

  function UtilsConfigService( defaults ) {
    var services = {
      get : get,
      getAll : getAll,
      set : set
    };
    return services;

    function get( key ) {
      if( key === undefined ) {
        //TODO error message
      } else {
        return defaults[ key ].value;
      }
    }

    function getAll() {
      return defaults;
    }

    function set( key, value ) {
      if( typeof key === 'object' ) {
        for( var prop in key ) {
          if( defaults[ prop ] ) {
            if( defaults[ prop ].editable ) {
              defaults[ prop ].value = key[ prop ];
              defaults[ prop ].editable = false;
            }
          } else {
            defaults[ prop ].value = key[ prop ];
            defaults[ prop ].editable = false;
          }
        }
      } else if( typeof key === 'string' ) {
        defaults[ key ].value = value;
        defaults[ key ].editable = false;
      }
    }
  }

  function config( key, value ) {
    if( typeof key === 'object' ) {
      setObj( key );
    } else if( typeof key === 'string' && arguments.length === 2 ) {
      //setStr( key, value );
    } else if( typeof key === 'string' && arguments.length === 1 ) {
      //return get( key );
    } else if( arguments.length === 0 ) {
      //return getProperty();
    } else {
      //TODO error
    }
  }

  function setObj( obj ) {
    for( var prop in obj ) {
      if( _defaults[ prop ] ) {
        if( _defaults[ prop ].editable ) {
          _defaults[ prop ].value = obj[ prop ];
          _defaults[ prop ].editable = false;
        }
      } else {
        _defaults[ prop ].value = obj[ prop ];
        _defaults[ prop ].editable = false;
      }
    }
  }

  function setStr() {

  }
})();
