(function() {
  'use strict';

  angular
    .module( 'app')
    .controller( 'MainController', MainController );

  MainController.$inject = [ 'config', 'MainService' ];

  function MainController( config, MainService ) {
    var _this = this,
        skinVersion = config.get( 'skinVersion' ),
        spellVersion = config.get( 'spellVersion' );

    _this.skinUrl = MainService.getSkinUrl( skinVersion );
    _this.spellVersion = MainService.getSpellUrl( spellVersion );
  }
})();
