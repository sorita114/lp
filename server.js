var express = require( 'express' ),
    http = require( 'http' ),
    fs = require( 'fs' ),
    path = require( 'path' ),
    app = express(),
    server = http.createServer( app );

app.use( '/static_bower' , express.static( __dirname + '/bower_components' ));
app.use( '/static_npm' , express.static( __dirname + '/node_modules') );
app.use( '/static_app' , express.static( __dirname + '/app') );
app.use( '/static_assets' , express.static( __dirname + '/assets' ));

app.get( '/' , function ( req, res ) {
  fs.readFile( 'index.html' , function( error , data ){
    if( error ){
      console.log( error );
    } else {
      res.writeHead( 200 , { 'Content-Type' : 'text/html' });
      res.end( data );
    }
  });
});


server.listen( 8000 , function(){
  console.log( __dirname );
  console.log( 'Server running at http://localhost:8000' );
});
