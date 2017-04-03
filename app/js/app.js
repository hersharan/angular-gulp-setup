angular.module( 'app', [ 'ui.router', 'home' ] ).config( function( $locationProvider, $urlRouterProvider ) {
  $locationProvider.html5Mode( true );
  $urlRouterProvider.otherwise( '/home' );
} ).run( function( $state ) {
  console.log( 'in angular' );
} );
