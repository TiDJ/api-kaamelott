/**
 * QuoteCtrl
 * - Connects to the API and get quotes
 * - Allows to add a quote via POST request
 */

angular.module('app.Quote', [])
.controller("QuoteCtrl", function($scope, $rootScope, $http){
	$rootScope.api_url = api_url_no_slash;

	// Get data from api
	$http.get(api_url+"quotes/api/v1/Quote/?format=json").
	  success(function(data) {
	  $rootScope.quotes = data;
	  }).
	  error(function(data) {
	  });

	  //Implementation of accordion for the quotes
	$rootScope.toggleGroup = function(group) {
		if ($rootScope.isGroupShown(group)) {
			$rootScope.shownGroup = null;
		} else {
			$rootScope.shownGroup = group;
		}
	};
	$rootScope.isGroupShown = function(group) {
		return $rootScope.shownGroup === group;
	};
})

.controller("AddQuoteCtrl", function($scope, $rootScope, $http, $location, Quote){
	$rootScope.api_url = api_url_no_slash;
	
	// Get data from api
	$http.get(api_url+"characters/api/v1/Character/?format=json").
	  success(function(data) {
	  $rootScope.characters = data;
	  }).
	  error(function(data) {
	  });

	  //Create a new local quote with angular resources
	$scope.quote = new Quote();
	
	//Save this quote to the API using resource defined in app.js
	$scope.add_quote = function(){
		$scope.quote.$save(function (quote, headers) {
	                    // Success
	                    $location.path('/quote')
	                }, function (error) {
	                    // failure
	                    console.log("$save failed " + JSON.stringify(error));
	                });	
	}
});
