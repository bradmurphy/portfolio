'use strict';

// require app and config
var app = require('../app');
var config = require('../config');

// about controller
app.controller('AboutCtrl', ['$scope', function($scope) {

  $scope.content = config.content;
  $scope.content = $scope.content.about;

}]);
