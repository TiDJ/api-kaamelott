/**
 * ActorCtrl
 *	Actor controller : connects to the API and get actors
 */

angular.module('app.Actor', [])
.controller("ActorCtrl", function($scope, $http, $rootScope, Actor){

	$rootScope.api_url = api_url_no_slash
	
	// Get data from api
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