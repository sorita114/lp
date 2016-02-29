( function (){
  'use strict';

  angular
    .module( 'app' )
    .controller( 'MainController' , MainController );

  function MainController( getSkin ) {
    var _this = this;

    this.datas = {
      skins : getSkin
    };
    this.loadMore = function() {
      // var last = _this.datas.skins.data[_this.datas.skins.data.length - 1];
      //   for(var i = 1; i <= 8; i++) {
      //     _this.datas.skins.data.push(last + i);
      //   }
    };
    console.log(this.datas.skins);
  }

})();
