
angular.module('app.Character', [])
.controller("CharacterCtrl", function($scope, $rootScope, $http){
	$rootScope.api_url = api_url_no_slash;
	console.log("Salut");
	$http.get(api_url+"characters/api/v1/Character/?format=json").
	  success(function(data) {
	  $rootScope.characters = data;
	  console.log(data);
	  }).
	  error(function(data) {
	  console.log(data);
	  });
})

.controller("DetailCharacterCtrl", function($scope, $rootScope, $http){
	
});