'use strict';

// require app
var app = require('../app');

// contact controller
app.controller('ContactCtrl', ['$scope', function($scope) {

  $scope.message = 'Contact info goes here...';

}]);
