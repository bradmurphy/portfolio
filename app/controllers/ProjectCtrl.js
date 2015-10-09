'use strict';

// require app and config
var app = require('../app');
var config = require('../config');

// project controller
app.controller('ProjectCtrl', ['$scope', '$routeParams', '$sce',
  function($scope, $routeParams, $sce) {

    $scope.work = config.work;

    $scope.work.forEach(function(el) {

      if (el.name === $routeParams.name) {

        var index = $scope.work.indexOf(el);
        $scope.project = el;
        $scope.projectPrev = $scope.work[index - 1];
        $scope.projectNext = $scope.work[index + 1];

        if ($scope.project.internal) {

          $scope.internalUrl = $sce.trustAsResourceUrl($scope.project.internal);

        }

        if ($scope.project.external) {

          $scope.externalUrl = $sce.trustAsResourceUrl($scope.project.external);

        }

      }

    });

  }]);
