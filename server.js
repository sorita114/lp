var http = require('http'),
    fs = require( 'fs' ),
    path = require( 'path' ),
    ext = /[\w\d_-]+\.[\w\d]+$/;

http.createServer( function ( req, res ){
  if( req.url === '/' ) {
    res.writeHead( 200 , { 'Content-Type' : 'text/html' });
    fs.createReadStream( 'index.html' ).pipe( res );
  } else if( ext.test( req.url ) ){
    fs.exist( path.join( _dirname, req.url ) , isExist );
  } else {

  }

}).listen( 1337 , '127.0.0.1' );
console.log( 'Server running at http://127.0.0.1:1337' );

//////
function isExist( exist ) {
  if( exists ) {
    res.writeHead( 200, {'Content-Type' : 'text/html' });
    fs.createReadStream( 'index.html' ).pipe( res );
  } else {
    res.writeHead( 404 , {'Content-Type' : 'text/html' });
    fs.createReadStream( '404.html' ).pipe( res );
  }
}
