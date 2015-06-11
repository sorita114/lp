( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'ListController' , ListController )
    .controller( 'viewController' , viewController );

    //app controller

  function ListController( getChampion ) {
      this.defaults = {
          list : getChampion
      };
  }

  function viewController( getChampion ) {
      this.item = getChampion;
  }

})();
