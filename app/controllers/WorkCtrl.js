'use strict';

// app
var app = require('../app');
var config = require('../config');

// faq controller
app.controller('WorkCtrl', ['$scope', function($scope) {

  $scope.index = null;
  $scope.work = config.work;

  $scope.setIndex = function(index) {

    $scope.index = index;

  };

}]);
