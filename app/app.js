'use strict';

// require TweenMax and bowser
var TweenMax = require('TweenMax');
var browser = require('bowser');

// initialize app
var app = angular.module('folioApp', ['ngRoute', 'ngAnimate']);

// animation for views
app.animation('.animation', function() {

  return {

    enter: function(element, done) {

      var el = element[0].querySelector('.view');

      if (!browser.mobile || browser.tablet) {

        TweenMax.from(el, 0.4, {
          y: '200px',
          autoAlpha: 0,
          ease: Power4.easeOut,
          onComplete: function() {
            done();
          }
        });

      }

    }

  };

});

module.exports = app;
