(function() {
  'use strict';

  angular
    .module( 'app')
    .controller( 'MainController', MainController );

  function MainController( MainService ) {
    var _this = this;

    _this.skinUrl = MainService.getSkinUrl();
  }
})();
