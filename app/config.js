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
    {src: './images/code.png'},
    {src: './images/standard.gif'},
    {src: './images/hover.gif'},
    {src: './images/thumb-google-satellites.jpg'},
    {src: './images/thumb-google-search-masthead.jpg'},
    {src: './images/thumb-ok-google-masthead.jpg'},
    {src: './images/thumb-ok-google.jpg'},
    {src: './images/thumb-russell-stover.jpg'},
    {src: './images/badge.png'},
    {src: './images/logo-youtube.png'},
    {src: './images/logo-circus.png'},
    {src: './images/logo-google.png'}
  ],

  work: [
    {
      name: 'ok-google-banner',
      logo: './images/logo-google.png',
      title: 'Ok Google',
      type: 'Banner',
      client: 'Google',
      internal: './src/ok-google-banner',
      content: './content/projects/ok-google-banner.html',
      date: 'April 2015',
      thumb: 'url(./images/thumb-ok-google.jpg) no-repeat 50% 50%',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'DoubleClick'
      ]
    },
    // {
    //   name: 'google-satellites-website',
    //   title: 'Google Satellites',
    //   type: 'Website',
    //   client: 'Google',
    //   external: 'http://www.bradmurphydev.com',
    //   content: './content/projects/google-satellites-website.html',
    //   date: 'November 2015',
    //   thumb: './images/thumb-google-satellites.jpg',
    //   technology: [
    //     'HTML5',
    //     'CSS3',
    //     'Javascript',
    //     'GSAP',
    //     'Angular'
    //   ]
    // },
    {
      name: 'google-search-masthead',
      logo: './images/logo-google.png',
      title: 'Google Search',
      type: 'Masthead',
      client: 'Google',
      internal: './src/google-search-masthead',
      content: './content/projects/google-search-masthead.html',
      date: 'October 2015',
      thumb: 'url(./images/thumb-google-search-masthead.jpg) no-repeat 50% 50%',
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
      name: 'ok-google-masthead',
      logo: './images/logo-google.png',
      title: 'Ok Google',
      type: 'Masthead',
      client: 'Google',
      internal: './src/ok-google-masthead',
      content: './content/projects/ok-google-masthead.html',
      date: 'June 2015',
      thumb: 'url(./images/thumb-ok-google-masthead.jpg) no-repeat 10% 0',
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
      logo: './images/logo-circus.png',
      title: 'Russell Stover',
      type: 'Website',
      client: 'Creative Circus',
      external: 'http://russellstover.bradmurphydev.com',
      content: './content/projects/russell-stover-website.html',
      date: 'December 2014',
      thumb: 'url(./images/thumb-russell-stover.jpg) no-repeat 50% 50%',
      hero: 'url(./images/hero-russell-stover.jpg) no-repeat 50% 50%',
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
