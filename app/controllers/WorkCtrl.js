'use strict';

// require app and config
var app = require('../app');
var config = require('../config');

// work controller
app.controller('WorkCtrl', ['$scope', function($scope) {

  $scope.work = config.work;

}]);
