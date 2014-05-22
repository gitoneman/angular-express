'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
  controller('mapCtrl', function ($scope) {
    var operater = {
      toggleRule:function(){
        $scope.query.rule = $scope.query.rule == true? false:true;
      },
      toggleRectangleZoom:function(){
        $scope.query.RectangleZoom = $scope.query.RectangleZoom == true? false:true;
      }
    }
    $scope.query = {
      place:"",
      rule:false,
      RectangleZoom:false
    }

    $scope.toggleRule = function(){
      operater.toggleRule();
    }
    $scope.toggleRectangleZoom = function(){
      operater.toggleRectangleZoom();
    }

  }).
  controller("dashboardCtrl",function($scope,$http,$timeout) {
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.dashboard = data.name;
      $scope.rows = data.rows;

    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
  });
