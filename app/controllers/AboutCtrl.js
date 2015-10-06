'use strict';

// require app
var app = require('../app');

// about controller
app.controller('AboutCtrl', ['$scope', function($scope) {

  $scope.message = 'About me stuff goes here...';

}]);
