'use strict';

// require app and TweenMax
var app = require('../app');
var TweenMax = require('TweenMax');

// nav controller
app.controller('NavCtrl', ['$scope', function($scope) {

  var status = false;
  var icon = document.querySelector('#nav-icon');
  var menu = document.querySelector('#menu');

  var open = new TimelineMax({paused: true});

  open.to(menu, 0.25, {
    marginLeft: '0px',
    ease: Power4.easeOut
  })
  .to(icon, 0.25, {
    className: '+=open',
    ease: Power4.easeOut
  }, '-=0.25');

  var close = new TimelineMax({paused: true});

  close.to(menu, 0.25, {
    marginLeft: '-220px',
    ease: Power4.easeIn
  })
  .to(icon, 0.25, {
    className: '-=open',
    ease: Power4.easeIn
  }, '-=0.25');

  $scope.toggleNav = function() {

    if (!status) {

      open.restart();

      status = true;

    } else {

      close.restart();

      status = false;

    }

  };

  $scope.closeNav = function() {

    if (status) {

      close.restart();

      status = false;

    }

  };

}]);
