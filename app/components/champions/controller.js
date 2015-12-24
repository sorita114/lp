( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'ListController' , ListController )
    .controller( 'ViewController' , ViewController );

    //app controller

  function ListController( getChampion ) {
      this.defaults = {
          list : getChampion
      };
  }

  function ViewController( getChampion ) {
      this.item = getChampion;
  }

})();
