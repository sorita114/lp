var appKey = '96a61826-7b3a-4e33-94c5-09d33230dc02';
// BASE SETUP
// ======================================================================================

// call the package we need
var express = require( 'express' ),     // call express
    app = express(),                    // defined our app using express
    https = require('https'),
    bodyParser = require( 'body-parser' );

// configure app to use bodyParser()
// this will let us get the data frome a post
app.use( bodyParser.urlencoded( { extended : true } ) );
app.use( bodyParser.json() );

// set path
app.use( '/static_bower' , express.static( __dirname + '/bower_components' ));
app.use( '/static_npm' , express.static( __dirname + '/node_modules') );
app.use( '/static_app' , express.static( __dirname + '/app') );
app.use( '/static_assets' , function( req , res, next ) {
  var fileUrl = req.url;

  res.sendFile( fileUrl , { root : __dirname + '/asseets' });

});

var port = process.env.PORT || 8080; // set our port

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

// more routes for our API will happen here

// on routes that end in /champion
// -----------------------------------------------------------------------------------------
router.route( '/champion' )
    .get( function( request , response ) {
        https.get( 'https://global.api.pvp.net/api/lol/static-data/kr/v1.2/champion?api_key=96a61826-7b3a-4e33-94c5-09d33230dc02' , function( res ){
            var chunks = '';

            res.on( 'data' , function( d ) {

                chunks = chunks + d;

            }).on( 'end' , function() {

                response.json( JSON.parse( chunks ) );
            });

        }).on( 'error' , function( e ) {
            console.log( 'Got error : ' , e );
        });
    })
    .get( '/all' , function( request , response ) {

    })


// REGISTER OUR ROUTES------------------------
// all of our routes will be prefiexed with /api
app.use( '/api' , router );

// START THE SERVER
// =========================================================================================
app.all( '/' , function ( req, res ) {
  res.sendFile( 'index.html' , { root : __dirname });
});

app.listen( port );
console.log( 'project on port: ' + port );
