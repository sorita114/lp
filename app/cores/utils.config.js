(function() {
  'use strict';

  angular
    .module( 'utils.config', [])
    .constant( '_defaults', {
      useLog : { editable : true, value : true },
      root : { editable : true, value : '/' },
      contextPath : { editable : true, value : '/' },
      appPath : { editable : true, value : '/static_app' },
      stylePath : { editable : true, value : '/static_style' },
      skinVersion : { editable : true, value : '6.16.2' },
      spellVersion : { editable : true, value : '6.16.2' }
    })
    .run( runBlock )
    .service( 'UtilsConfigService', UtilsConfigService );

  UtilsConfigService.$inject = [ '_defaults' ];

  function runBlock() {
    if( !window.console ) {
      window.console = {
        error : function( str ) {
          alert( str );
        }
      };
    }
  }

  function UtilsConfigService( _defaults ) {
    this.get = get;
    this.getAll = getAll;
    this.set = set;

    function get( key ) {
      if( key === undefined ) {
        return console.error( 'key is undefined' );
      } else {
        return _defaults[ key ].value;
      }
    }

    function getAll() {
      return _defaults;
    }

    function set( key, value ) {
      if( typeof key === 'object' ) {
        for( var prop in key ) {
          if( _defaults[ prop ] ) {
            if( _defaults[ prop ].editable ) {
              _defaults[ prop ].value = key[ prop ];
              _defaults[ prop ].editable = false;
            }
          } else {
            _defaults[ prop ].value = key[ prop ];
            _defaults[ prop ].editable = false;
          }
        }
      } else if( typeof key === 'string' ) {
        _defaults[ key ].value = value;
        _defaults[ key ].editable = false;
      }
    }
  }
})();
