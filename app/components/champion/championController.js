(function() {
  'use strict';

  angular
    .module( 'app' )
    .controller( 'ChampionController', ChampionController );

  ChampionController.$inject = [ 'logger', 'getChampion' ];

  function ChampionController( logger, getChampion ) {
    _this.championData = getChampion;

    
  }
})();
