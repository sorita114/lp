( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'MainController' , MainController );

  function MainController( getSkin ) {
    this.datas = {
      skins : getSkin
    };
  }

})();
