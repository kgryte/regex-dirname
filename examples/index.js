'use strict';

var re = require( './../lib' );

var dir;

// Assuming a POSIX platform...
dir = re.exec( '/foo/bar/index.js' )[ 1 ];
console.log( dir );
// returns '/foo/bar'

dir = re.posix.exec( '/foo/bar/home.html' )[ 1 ];
console.log( dir );
// returns '/foo/bar'

dir = re.win32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
console.log( dir );
// returns 'C:\\foo\\bar'
