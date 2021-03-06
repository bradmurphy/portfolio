'use strict';

// require app
var app = require('./app');

// router
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })

    .when('/work', {
      templateUrl: 'views/work.html',
      controller: 'WorkCtrl'
    })

    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })

    .when('/projects/:name', {
      templateUrl: 'views/project.html',
      controller: 'ProjectCtrl'
    })

    .otherwise({
      redirectTo: '/about'
    });

    if (window.history && window.history.pushState) {

      $locationProvider.html5Mode(true);

    }

  }]);
