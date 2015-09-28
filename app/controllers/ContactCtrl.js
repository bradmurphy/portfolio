'use strict';

// app
var app = require('../app');

// etiquette controller
app.controller('ContactCtrl', ['$scope', function($scope) {

  $scope.message = 'Contact info goes here...';

}]);
