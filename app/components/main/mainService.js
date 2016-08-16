(function() {
  'use strict';

  angular
    .module( 'app' )
    .service( 'MainService', MainService );

  MainService.$inject = [ 'UtilsConfigService' ];

  function MainService( UtilsConfig ) {
    this.getSkinUrl = function() {
      var skinVersion = UtilsConfig.get( 'skinVersion' ),
          skinUrl = 'http://ddragon.leagueoflegends.com/cdn/' + skinVersion + '/img/champion';

      return skinUrl;
    };
  }
})();
