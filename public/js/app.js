"use strict";

var app = angular.module('mastermindApp', ['ngRoute', 'ngMessages']);

app.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      controller: 'HomeCtrl as home',
      templateUrl: '/views/home.html'
    })
    .when('/games', {
      controller: 'GamesCtrl as games',
      templateUrl: '/views/games.html'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.constant('config', {
  apiURL: 'https://axiomzen-mastermind.herokuapp.com/api/',
  baseURL: window.location.origin,
})
.factory('UserAPI', function (config, $http) {
  var _login = function (data) {
    return $http.post(config.apiURL + 'authentication.json', data);
  };

  return {
    login: _login,
  };
});