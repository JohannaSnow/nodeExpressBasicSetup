var express = require( 'express' );
var app = express();

app.listen( '8080', 'localhost', function( req, res ){
  console.log( 'server listening on port 8080' );
}); //end app.listen

app.get( '/', function( req, res ){
  console.log( 'base URL hit' );
  res.send( 'hello world from server!' );
});
