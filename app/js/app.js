angular.module( 'app', [ 'templates','ui.router', 'index' ] ).config( function( $locationProvider, $urlRouterProvider ) {
  $locationProvider.html5Mode( true );
  $urlRouterProvider.otherwise( '/home' );
} ).run( function() {
  console.log( 'angular started' );
} );
