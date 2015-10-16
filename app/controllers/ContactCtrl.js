'use strict';

// require app and config
var app = require('../app');
var config = require('../config');

// contact controller
app.controller('ContactCtrl', ['$scope', function($scope) {

  $scope.content = config.content;
  $scope.content = $scope.content.contact;

}]);
