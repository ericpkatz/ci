var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $locationProvider){
  $locationProvider.html5Mode(true);
});
