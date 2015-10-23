'use strict';

// require TweenMax and bowser
var TweenMax = require('TweenMax');
var browser = require('bowser');

// initialize app
var app = angular.module('folioApp', ['ngRoute', 'ngAnimate']);

// animation for views
if (!browser.mobile || browser.tablet) {

  app.animation('.animation', function() {

    return {

      enter: function(element, done) {

        var el = element[0].querySelectorAll('.view');

        TweenMax.from(el, 0.25, {
          y: '200px',
          autoAlpha: 0,
          delay: 0.25,
          ease: Power4.easeOut,
          onComplete: function () {
            done();
            console.log('Enter');
          }
        });

      },

      leave: function(element, done) {

        var el = element[0].querySelectorAll('.view');

        TweenMax.to(el, 0.25, {
          y: '200px',
          autoAlpha: 0,
          ease: Power4.easeIn,
          onComplete: function() {
            done();
            console.log('Leave');
          }
        });

      }

    };

  });

}

module.exports = app;
