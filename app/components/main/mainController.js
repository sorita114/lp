(function() {
  'use strict';

  angular
    .module( 'app')
    .controller( 'MainController', MainController );

  MainController.$inject = [ 'UtilsConfigService', 'UtilsLogService', 'MainService' ];

  function MainController( UtilsConfig, UtilsLog, MainService ) {
    var _this = this,
        skinVersion = UtilsConfig.get( 'skinVersion' ),
        spellVersion = UtilsConfig.get( 'spellVersion' );

    _this.skinUrl = MainService.getSkinUrl( skinVersion );
    _this.spellVersion = MainService.getSpellUrl( spellVersion );
  }
})();
