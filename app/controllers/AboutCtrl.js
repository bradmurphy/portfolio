'use strict';

// app
var app = require('../app');

// home controller
app.controller('AboutCtrl', ['$scope', function($scope) {

  $scope.message = 'Everyone come and see how good I look!';

}]);
