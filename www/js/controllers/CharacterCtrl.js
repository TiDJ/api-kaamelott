/**
 * CharacterCtrl
 * - Connects to the API and get characters
 */

angular.module('app.Character', [])
.controller("CharacterCtrl", function($scope, $rootScope, $http, $timeout){
	$rootScope.api_url = api_url_no_slash;
	
	// Get data from api
	$http.get(api_url+"characters/api/v1/Character/?format=json").
	  success(function(data) {
	  $rootScope.characters = data;
	  }).
	  error(function(data) {
	  });
})

.controller("DetailCharacterCtrl", function($scope, $rootScope, $http){
	
});