(function() {
  'use strict';

  angular
    .module( 'app')
    .controller( 'MainController', MainController );

  MainController.$inject = [ 'UtilsLogService', 'MainService' ];

  function MainController( UtilsLog, MainService ) {
    var _this = this;

    _this.skinUrl = MainService.getSkinUrl();
  }
})();
