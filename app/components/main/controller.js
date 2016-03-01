( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'MainController' , MainController );

  function MainController( getSkin ) {
    var datas = getSkin.data,
        _this = this;

    this.skins = datas;
  }

})();
