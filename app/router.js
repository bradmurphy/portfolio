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

      .when('/lilly-singh-masthead', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })

      .when('/google-search-masthead', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })

      .when('/google-satellites-website', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })

      .when('/ok-google-banner', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })

      .when('/ok-google-masthead', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    }]);
