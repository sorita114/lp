module.exports = function() {
    var defaults = {
        appkey : 'd8d763b5-67bc-41b0-911a-cb88080b925b',
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
