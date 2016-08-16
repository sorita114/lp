(function() {
  'use strict';

  angular
    .module( 'app' )
    .service( 'MainService', MainService );

  MainService.$inject = [ 'UtilsConfigService' ];

  function MainService( UtilsConfigService ) {
    this.getSkinUrl = function() {
      var skinVersion = UtilsConfigService.get( 'skinVersion' ),
          skinUrl = 'http://ddragon.leagueoflegends.com/cdn/' + skinVersion + '/img/champion';

      return skinUrl;
    };
  }
})();
