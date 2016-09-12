var express = require( 'express');
var app = express();
var path = require( 'path' );
var bodyParser= require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var portDecision = process.env.PORT || 3001;
var countMorts = 0;
// spi up server
app.listen( portDecision, function(){
  console.log( 'server UP!' );
});

// base url
app.get( '/', function( req, res ){
  console.log( 'base URL hit' );
  // resolve path to index.html and send
  res.sendFile( path.resolve( 'public/index.html' ) );
}); // end /

// mort's path
app.post( '/mort', urlencodedParser, function( req, res ){
  console.log( 'mort path hit', req.body );
  // increment morts
  countMorts++;
  console.log( 'morts:', countMorts );
  // send morts back to client
  // assemble objectToSend
  var objectToSend = {
    maxMorts: countMorts
  }
  res.send( objectToSend );
});

// static public folder
app.use( express.static( 'public' ) );
