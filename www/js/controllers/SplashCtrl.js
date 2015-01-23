/**
 * SplashCtrl
 * - Loads a splash screen for 3 secs
 */

angular.module('app.Splash', [])
.controller("SplashCtrl", function($scope, $rootScope, $http, $timeout, $location){
	  $timeout(function() {
        $location.path('/home');
    }, 3000);
});
