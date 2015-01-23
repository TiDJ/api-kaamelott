/**
 * QuoteCtrl
 * - Controller des acteurs, se connecte a l'API et recupérer les différentes acteurs
 */

angular.module('app.Actor', [])
.controller("ActorCtrl", function($scope, $http, $rootScope, Actor){

	// $scope.actors = Actor.query();
	// console.log($scope.actors);
	$rootScope.api_url = api_url_no_slash
	$http.get(api_url+"actors/api/v1/Actor/?format=json").
	  success(function(data) {
	  $rootScope.actors = data;
	  }).
	  error(function(data) {
	  console.log(data);
	  });

})

.controller("DetailActorCtrl", function($scope, $http, $rootScope, Actor){
	console.log($rootScope.actor);
	console.log("lbal");
});