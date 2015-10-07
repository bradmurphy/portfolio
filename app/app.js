'use strict';

// require TweenMax
var TweenMax = require('TweenMax');

// initialize app
var app = angular.module('folioApp', ['ngRoute', 'ngAnimate']);

// animation for views
app.animation('.animation', function() {

  return {

    enter: function(element, done) {

      var el = element[0].querySelector('.view');

      TweenMax.from(el, 0.4, {
        y: '200px',
        autoAlpha: 0,
        ease: Power4.easeOut,
        onComplete: function() {
          done();
        }
      });

    }

  };

});

module.exports = app;
