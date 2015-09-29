'use strict';

// app
var app = require('./app');

// router
app.config(['$routeProvider',
    function($routeProvider) {

      $routeProvider

      .when('/', {
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

      .when('/lilly-singh', {
        templateUrl: 'views/project.html',
        controller: 'WorkCtrl'
      })

      .when('/google-search', {
        templateUrl: 'views/project.html',
        controller: 'WorkCtrl'
      })

      .when('/google-satellites', {
        templateUrl: 'views/project.html',
        controller: 'WorkCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    }]);
