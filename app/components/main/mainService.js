(function() {
  'use strict';

  angular
    .module( 'app' )
    .service( 'MainService', MainService );

  function MainService() {
    var _this = this;

    _this.getSkinUrl = getSkinUrl;
    _this.getSpellUrl = getSpellUrl;
  }

  function getSkinUrl( version ) {
    return 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion';
  }

  function getSpellUrl( version ) {
    return 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/spell';
  }
})();
