'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ui.router'
]).
config(function ($routeProvider, $locationProvider,$stateProvider, $urlRouterProvider) {
  // $routeProvider.
  //   when('/view1', {
  //     templateUrl: 'partials/partial1',
  //     controller: 'MyCtrl1'
  //   }).
  //   when('/view2', {
  //     templateUrl: 'partials/partial2',
  //     controller: 'MyCtrl2'
  //   }).

  //   otherwise({
  //     redirectTo: '/view1'
  //   });

  // $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise("/state2");
  //
  // Now set up the states
  $stateProvider
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "partials/dashboard.jade",
      controller: 'dashboardCtrl'
    })
    .state("layouts.layout1",{
      url: "/layout1",
      templateUrl: "/partials/dashboard.layout1.jade"
    })
    .state("layouts.layout2",{
      url: "/layout2",
      templateUrl: "partials/dashboard.layout2.jade"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.jade"
    })
    .state("layouts",{
      url: "/layouts",
      templateUrl: "partials/layouts.jade"
    })
    .state("map",{
      url: "/map",
      templateUrl: "partials/map.jade",
      controller: "mapCtrl"
    })
   
});
