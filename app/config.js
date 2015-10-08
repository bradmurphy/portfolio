'use strict';

// config object
var config = {

  manifest: [
    {src: './images/logo.png'},
    {src: './images/code.png'}
  ],

  data: {
    lat: 42.279583,
    lng: -83.746419,
    marker: 'images/code.png'
  },

  work: [
    {
      name: 'lilly-singh-masthead',
      title: 'Lilly Singh',
      type: 'Masthead',
      client: 'YouTube',
      url: 'http://www.bradmurphydev.com'
    },
    {
      name: 'ok-google-banner',
      title: 'Ok Google',
      type: 'Banner',
      client: 'Google',
      url: 'http://www.bradmurphydev.com'
    },
    {
      name: 'google-satellites-website',
      title: 'Google Satellites',
      type: 'Website',
      client: 'Google'
    },
    {
      name: 'ok-google-masthead',
      title: 'Ok Google',
      type: 'Masthead',
      client: 'Google',
      url: 'http://www.bradmurphydev.com'
    },
    {
      name: 'google-search-masthead',
      title: 'Google Search',
      type: 'Masthead',
      client: 'Google',
      url: 'http://www.bradmurphydev.com'
    },
    {
      name: 'russell-stover-website',
      title: 'Russell Stover',
      type: 'Website',
      client: 'Creative Circus'
    }

  ]

};

module.exports = config;
