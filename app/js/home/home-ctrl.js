angular.module( 'home', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'home', {
  	parent:"index",
    url: 'home',
    templateUrl: 'app/js/home/home.tpl',
    controller: 'HomeCtrl',
  } );
} ).controller( 'HomeCtrl', function( $scope ) {
  console.log( 'in home ctrl' );
} );
