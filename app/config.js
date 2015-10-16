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
    // {
    //   name: 'lilly-singh-masthead',
    //   title: 'Lilly Singh',
    //   type: 'Masthead',
    //   client: 'YouTube',
    //   internal: './projects/lilly-singh-masthead',
    //   content: [
    //     "Here's a sample paragraph",
    //     "Another sample paragraph",
    //     "And here's some more."
    //   ],
    //   date: 'August 2015',
    //   technology: [
    //     'HTML5',
    //     'CSS3',
    //     'Javascript',
    //     'GSAP',
    //     'DoubleClick'
    //   ]
    // },
    {
      name: 'ok-google-banner',
      title: 'Ok Google',
      type: 'Banner',
      client: 'Google',
      internal: './projects/ok-google-banner',
      content: './content/projects/ok-google-banner.html',
      date: 'August 2015',
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
      date: 'August 2015',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'DoubleClick'
      ]
    },
    {
      name: 'ok-google-masthead',
      title: 'Ok Google',
      type: 'Masthead',
      client: 'Google',
      internal: './projects/ok-google-masthead',
      content: './content/projects/ok-google-masthead.html',
      date: 'August 2015',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
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
      date: 'August 2015',
      technology: [
        'HTML5',
        'CSS3',
        'Javascript',
        'GSAP',
        'DoubleClick'
      ]
    },
    {
      name: 'russell-stover-website',
      title: 'Russell Stover',
      type: 'Website',
      client: 'Creative Circus',
      external: 'http://www.bradmurphydev.com',
      content: './content/projects/russell-stover-website.html',
      date: 'August 2015',
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
