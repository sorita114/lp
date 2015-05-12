module.exports = function() {
    var defaults = {
        appkey : '96a61826-7b3a-4e33-94c5-09d33230dc02',
        apiUrl : 'https://global.api.pvp.net/api/lol/static-data',
        lang : 'kr',
        version : 'v1.2'
    };
    return {
        get : function( key ) {
            return defaults[ key ];
        },
        set : function( key , value ) {
            defaults[ key ] = value;
        }
    };
};
