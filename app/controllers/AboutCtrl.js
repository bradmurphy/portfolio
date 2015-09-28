'use strict';

// app
var app = require('../app');

// home controller
app.controller('AboutCtrl', ['$scope', function($scope) {

  $scope.message = 'About me stuff goes here...';

}]);
