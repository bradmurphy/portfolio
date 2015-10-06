'use strict';

// app
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

        if ($scope.project.url) {

          $scope.iframeUrl = $sce.trustAsResourceUrl($scope.project.url);

        }

      }

    });

  }]);
