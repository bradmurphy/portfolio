'use strict';

// config object
var config = {

  content: {
    about: './content/about.html',
    contact: './content/contact.html'
  },

  data: {
    lat: 42.279583,
    lng: -83.746419,
    marker: 'images/code.png'
  },

  manifest: [
    {src: './images/logo.png'},
    {src: './images/code.png'}
  ],

  work: [
    {
      name: 'ok-google-banner',
      title: 'Ok Google',
      type: 'Banner',
      client: 'Google',
      internal: './projects/ok-google-banner',
      content: './content/projects/ok-google-banner.html',
      date: 'April 2015',
      thumb: './images/thumb-ok-google.jpg',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'DoubleClick'
      ]
    },
    {
      name: 'google-satellites-website',
      title: 'Google Satellites',
      type: 'Website',
      client: 'Google',
      external: 'http://www.bradmurphydev.com',
      content: './content/projects/google-satellites-website.html',
      date: 'November 2015',
      thumb: './images/thumb-google-satellites.jpg',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'Angular'
      ]
    },
    {
      name: 'ok-google-masthead',
      title: 'Ok Google',
      type: 'Masthead',
      client: 'Google',
      internal: './projects/ok-google-masthead',
      content: './content/projects/ok-google-masthead.html',
      date: 'June 2015',
      thumb: './images/thumb-ok-google-masthead.jpg',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'YouTube API',
        'DoubleClick'
      ]
    },
    {
      name: 'google-search-masthead',
      title: 'Google Search',
      type: 'Masthead',
      client: 'Google',
      internal: './projects/google-search-masthead',
      content: './content/projects/google-search-masthead.html',
      date: 'October 2015',
      thumb: './images/thumb-google-search-masthead.jpg',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'YouTube API',
        'DoubleClick'
      ]
    },
    {
      name: 'russell-stover-website',
      title: 'Russell Stover',
      type: 'Website',
      client: 'Creative Circus',
      external: 'http://russellstover.bradmurphydev.com',
      content: './content/projects/russell-stover-website.html',
      date: 'December 2014',
      thumb: './images/thumb-russell-stover.jpg',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'jQuery',
        'PHP',
        'GSAP'
      ]
    }

  ]

};

module.exports = config;
