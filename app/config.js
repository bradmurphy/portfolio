'use strict';

// config object for all data and assets

var config = {

  manifest: [
    {src: './images/alpharetta.png'}
  ],

  data: {
    name: 'Ann Arbor',
    address: '11770 Haynes Bridge Road',
    cityState: 'Alpharetta, GA 30009',
    telLink: '6787445844',
    tel: '678.744.5844',
    dir: 'https://www.google.com/maps/dir/Current+Location/34.069504,-84.295151',
    web: 'http://salonsbyjc.com/alpharetta-alpharetta-crossing/',
    fb: 'https://www.facebook.com/pages/Salons-by-JC-Alpharetta/876484342370968',
    ig: 'https://instagram.com/salonsbyjc_alpharetta/',
    contact: 'http://salonsbyjc.com/alpharetta-alpharetta-crossing/contact-us/',
    lat: 42.279594,
    lng: -83.732124,
    marker: 'images/alpharetta.png'
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
    }

  ]

};

module.exports = config;
