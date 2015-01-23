/**
 * QuoteCtrl
 * - Controller des citations, se connecte a l'API et recupérer les différentes citations
 * - Permet l'ajout d'une citation en POST via envoie a l'API
 */

angular.module('app.Quote', [])
.controller("QuoteCtrl", function($scope, $rootScope, $http){
	$rootScope.api_url = api_url_no_slash;
	console.log("Quote");
	$http.get(api_url+"quotes/api/v1/Quote/?format=json").
	  success(function(data) {
	  $rootScope.quotes = data;
	  	console.log($rootScope.quotes);
	  }).
	  error(function(data) {
	  	console.log(data);
	  });

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
	
	
	$http.get(api_url+"characters/api/v1/Character/?format=json").
	  success(function(data) {
	  $rootScope.characters = data;
	  console.log(data);
	  }).
	  error(function(data) {
	  console.log(data);
	  });

	$scope.quote = new Quote();
	console.log($scope.quote);
	
	$scope.add_quote = function(){
		$scope.quote.$save(function (quote, headers) {
	                    // Success
	                    console.log("$save success " + JSON.stringify(quote));
	                    console.log(quote);
	                    $location.path('/quote')
	                }, function (error) {
	                    // failure
	                    console.log(error.data.error);
	                    console.log("$save failed " + JSON.stringify(error));
	                });	
	}
});
