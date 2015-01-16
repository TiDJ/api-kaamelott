/**
 * Created by Whysper on 15/01/2015.
 */
angular.module('app.Actor', [])
.controller("ActorCtrl", function($scope, Actor){

	$scope.actors = Actor.query();
	console.log($scope.actors);

});