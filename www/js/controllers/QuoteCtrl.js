
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

.controller("AddQuoteCtrl", function($scope, $rootScope, $http){
	$rootScope.api_url = api_url_no_slash;
	$http.get(api_url+"characters/api/v1/Character/?format=json").
	  success(function(data) {
	  $rootScope.characters = data;
	  console.log(data);
	  }).
	  error(function(data) {
	  console.log(data);
	  });
});
