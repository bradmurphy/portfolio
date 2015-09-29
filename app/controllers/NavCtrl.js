'use strict';

// app
var app = require('../app');
var TweenMax = require('TweenMax');

// nav controller
app.controller('NavCtrl', ['$scope', function($scope) {

  var status = false;
  var icon = document.querySelector('#nav-icon');
  var menu = document.querySelector('#menu');

  $scope.toggleNav = function() {

    if (!status) {

      TweenMax.to(icon, 0.5, {className: '+=open', ease: Power4.easeOut});
      TweenMax.to(menu, 0.5, {marginLeft: '0%', ease: Power4.easeOut});
      status = true;

    } else {

      TweenMax.to(icon, 0.5, {className: '-=open', ease: Power4.easeIn});
      TweenMax.to(menu, 0.5, {marginLeft: '-100%', ease: Power4.easeIn});
      status = false;

    }

  };

  $scope.closeNav = function() {

    if (status) {

      TweenMax.to(icon, 0.5, {className: '-=open', ease: Power4.easeIn});
      TweenMax.to(menu, 0.5, {marginLeft: '-100%', ease: Power4.easeIn});
      status = false;

    }

  };

}]);
