'use strict';

// app
var app = require('../app');
var config = require('../config');

// faq controller
app.controller('ProjectCtrl', ['$scope', '$location', function($scope, $location) {

  $scope.work = config.work;

  var locPath = $location.path();

  $scope.work.forEach(function(el) {

    if (locPath === el.path) {

      $scope.project = el;

    };

  });

  $scope.projectPrev = $scope.work[$scope.project.index - 1];
  $scope.projectNext = $scope.work[$scope.project.index + 1];

}]);
