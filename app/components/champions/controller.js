( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'ChampionController' , ChampionController );

    //app controller

  function ChampionController( getChampion ) {
      this.defaults = {
          champions : getChampion
      };

      console.log( this.defaults.champions );
  }
})();
