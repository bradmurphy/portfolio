'use strict';

// require TweenMax
var TweenMax = require('TweenMax');

// initialize app
var app = angular.module('folioApp', ['ngRoute', 'ngAnimate']);

// animation for views
app.animation('.content', function() {

  return {

    enter: function(element, done) {

      TweenMax.from(element, 0.4, {
        x: '100%',
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: done()
      });

    }

  };

});

module.exports = app;
