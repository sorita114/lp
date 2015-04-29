var express = require( 'express' ),
    http = require( 'http' ),
    fs = require( 'fs' ),
    path = require( 'path' ),
    app = express(),
    server = http.createServer( app );

app.use( '/static_bower' , express.static( __dirname + '/bower_components' ));
app.use( '/static_npm' , express.static( __dirname + '/node_modules') );
app.use( '/static_app' , express.static( __dirname + '/app') );
app.use( '/static_assets' , function( req , res, next ) {
  var fileUrl = req.url;

  res.sendFile( fileUrl , { root : __dirname + '/asseets' });

});

app.all( '/*' , function ( req, res ) {
  res.sendFile( 'index.html' , { root : __dirname });
});

server.listen( 8000 , function(){
  console.log( 'Server running at http://localhost:8000' );
});
