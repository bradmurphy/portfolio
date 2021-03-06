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
    {src: './images/badge.png'},
    {src: './images/standard.gif'},
    {src: './images/hover.gif'},
    {src: './images/thumb-terra-bella.jpg'},
    {src: './images/thumb-google-search-masthead.jpg'},
    {src: './images/thumb-ok-google-masthead.jpg'},
    {src: './images/thumb-ok-google.jpg'},
    {src: './images/thumb-russell-stover.jpg'},
    {src: './images/thumb-stitches.jpg'},
    {src: './images/hero-terra-bella.jpg'},
    {src: './images/hero-youtube-rewind.jpg'},
    {src: './images/hero-russell-stover.jpg'},
    {src: './images/hero-stitches.jpg'},
    {src: './images/logo-youtube.png'},
    {src: './images/logo-circus.png'},
    {src: './images/logo-google.png'},
    {src: './images/logo-hook.png'}
  ],

  work: [

    {
      name: 'nextup-website',
      logo: './images/logo-youtube.png',
      title: 'Next Up',
      type: 'Website',
      client: 'YouTube',
      external: 'http://www.youtube.com/yt/nextup',
      content: './content/projects/nextup-website.html',
      date: 'September 2016',
      thumb: 'url(./images/thumb-nextup.jpg) no-repeat 50% 50%',
      hero: 'url(./images/hero-nextup.jpg) no-repeat 50% 50%',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'Polymer'
      ]
    },
    {
      name: 'creator-hub-website',
      logo: './images/logo-youtube.png',
      title: 'Creator Hub',
      type: 'Website',
      client: 'YouTube',
      external: 'http://www.youtube.com/yt/creators',
      content: './content/projects/creator-hub-website.html',
      date: 'June 2016',
      thumb: 'url(./images/thumb-creator-hub.jpg) no-repeat 50% 50%',
      hero: 'url(./images/hero-creator-hub.jpg) no-repeat 50% 50%',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'Polymer'
      ]
    },
    {
      name: 'stitches-webapp',
      logo: './images/logo-hook.png',
      title: 'Stitches',
      type: 'Web App',
      client: 'Hook',
      external: 'http://hookerz.github.io/stitches',
      content: './content/projects/stitches-webapp.html',
      date: 'March 2016',
      thumb: 'url(./images/thumb-stitches.jpg) no-repeat 50% 50%',
      hero: 'url(./images/hero-stitches.jpg) no-repeat 50% 50%',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'Polymer'
      ]
    },
    {
      name: 'terra-bella-website',
      logo: './images/logo-google.png',
      title: 'Terra Bella',
      type: 'Website',
      client: 'Google',
      external: 'http://terrabella.google.com',
      content: './content/projects/terra-bella-website.html',
      date: 'March 2016',
      thumb: 'url(./images/thumb-terra-bella.jpg) no-repeat 50% 50%',
      hero: 'url(./images/hero-terra-bella.jpg) no-repeat 50% 50%',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'Angular',
        'THREE.js'
      ]
    },
    {
      name: 'youtube-rewind',
      logo: './images/logo-youtube.png',
      title: 'Rewind to the Future',
      type: 'Website',
      client: 'YouTube',
      external: 'http://rewindtothefuture.withyoutube.com',
      content: './content/projects/youtube-rewind.html',
      date: 'December 2015',
      thumb: 'url(./images/thumb-youtube-rewind.jpg) no-repeat 50% 50%',
      hero: 'url(./images/hero-youtube-rewind.jpg) no-repeat 50% 50%',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'Polymer',
        'CreateJS',
        'Underscore.js',
        'THREE.js'
      ]
    },
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
        'DoubleClick'
      ]
    },
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
    }

  ]

};

module.exports = config;
