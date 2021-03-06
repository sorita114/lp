// BASE SETUP
// ======================================================================================

// call the package we need
var express = require( 'express' ),     // call express
    app = express(),                    // defined our app using express
    https = require('https'),
    globals = require( './assets/js/global.js')(),
    bodyParser = require( 'body-parser' ),
    appkey = globals.get( 'appkey' ),
    imageVersion = globals.get( 'imageVersion' ),
    cdnImageDomain = globals.get( 'cdnImageDomain' ),
    apiDomain = globals.get( 'apiUrl' ),
    languageCode = globals.get( 'lang' ),
    apiVersion = globals.get( 'version' );

// configure app to use bodyParser()
// this will let us get the data frome a post
app.use( bodyParser.urlencoded( { extended : true } ) );
app.use( bodyParser.json() );

// set path
app.use( '/library' , express.static( __dirname + '/bower_components' ));
app.use( '/build' , express.static( __dirname + '/node_modules') );
app.use( '/app' , express.static( __dirname + '/app') );
app.use( '/js', express.static( __dirname + '/assets/js') );
app.use( '/css', express.static( __dirname + '/assets/css') );

var port = process.env.PORT || 8085; // set our port

//ROUTES FOR OUR API
// ========================================================================================
var router = express.Router();  //get an instance of the express Router
// middleware to use for all requests
router.use( function( req, res , next ) {
    //do logging
    console.log( 'Something is happening.' );
    next(); // make sure we go to the next reoutes and don't stop here
});

// test route to make sure everything is working ( accessed at GET http://localhost:8080/api )
router.get( '/' , function( req, res ) {
    res.json({
        message : 'hooray! welcome to our api!'
    });
});

// more routes for our API will happen here
router.get( '/champion/:id' , function( request , response ) {
  var id = request.params.id,
      url = apiDomain + '/' + languageCode + '/' + apiVersion + '/champion/' + id + '?champData=all&api_key=' + appkey;

  https.get( url , function( res ){
      var chunks = '';

      res.on( 'data' , function( d ) {

          chunks = chunks + d;

      }).on( 'end' , function() {

          response.json( JSON.parse( chunks ) );
      });

  }).on( 'error' , function( e ) {
      console.log( 'Get champion error : ' , e );
  });
});

router.get( '/skins', function( request , response ) {
  var url = apiDomain + '/' + languageCode + '/' + apiVersion + '/champion?champData=skins&api_key=' + appkey;

  https.get( url , function( res ) {
    var chunks = '';

    res.on( 'data' , function( d ) {

      chunks = chunks + d;

    }).on( 'end' , function() {

      response.json( JSON.parse( chunks ) );

    });
  }).on( 'error' , function( e ) {
      console.log( 'Get skins error : ' , e );
  });
});

// REGISTER OUR ROUTES------------------------
// all of our routes will be prefiexed with /api
app.use( '/api' , router );

// START THE SERVER
// =========================================================================================
app.all( '/' , function ( req, res ) {
    res.sendFile( 'index.html' , { root : __dirname });
});

app.use( '/champion/:id', function( req, res ) {
  res.redirect( '/#/champion/' + req.params.id );
});

app.use( function( req, res, next ) {
  res.status( 404 ).sendFile( '404.html' , { root : __dirname });
});

app.listen( port );
console.log( 'project on port: ' + port );
