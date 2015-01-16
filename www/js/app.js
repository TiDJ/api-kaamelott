// Ionic Starter App

var api_url = "http://10.24.0.53:8080/";

angular.module('app', ['ionic',  'ngRoute', 'ngResource', 'app.Actor', 'app.Character'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

    .config(function( $stateProvider, $urlRouterProvider) {

      $stateProvider
          .state('app', {
            abstract: true,
            templateUrl: "templates/menu.html"
          })

          .state('app.home', {
            url: "/home", views: {'menuContent': {templateUrl: "templates/home.html"}}
          })

          .state('app.character', {
            url: "/character", views: {'menuContent': {templateUrl: "templates/character.html", controller: 'CharacterCtrl'}}
          })

          .state('app.actor', {
              url: "/actor", views: {'menuContent': {templateUrl: "templates/actor.html", controller: 'ActorCtrl'}}
          })

          .state('app.quote', {
              url: "/quote", views: {'menuContent': {templateUrl: "templates/quote.html", controller: 'QuoteCtrl'}}
          })

          $urlRouterProvider.otherwise('/home');

    })

    .factory("Actor", function($resource) {
        return $resource(api_url+"quotes/api/v1/quote/:id/?format=json", {}, {'query': { method: 'GET' }});
    })
    .factory("Character", function($resource) {
        return $resource(api_url+"characters/api/character/:id/?format=json");
    })
    .factory("Quote", function($resource) {
        return $resource(api_url+"quotes/api/quote/:id/?format=json");
    })






