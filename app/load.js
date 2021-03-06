'use strict';

/* Require all components in order to initialize application
 * and set up the single page app.
 */

// browser, config, selectors
var config = require('./config');
var browser = require('bowser');

// selectors
var nope = document.querySelector('.nope');
var wrap = document.querySelector('.wrap');
var link = document.querySelector('.browser-link');
var outdated = document.querySelector('.browser');

// browser control
if (browser.msie && browser.version <= 10) {

  wrap.style.display = 'none';
  nope.style.display = 'block';
  outdated.style.display = 'block';
  link.style.display = 'block';
  link.href = 'http://windows.microsoft.com/en-us/internet-explorer/download-ie';

} else if (browser.chrome && browser.version <= 44) {

  wrap.style.display = 'none';
  nope.style.display = 'block';
  outdated.style.display = 'block';
  link.style.display = 'block';
  link.href = 'http://www.google.com/chrome';

} else if (browser.opera && browser.version <= 31) {

  wrap.style.display = 'none';
  nope.style.display = 'block';
  outdated.style.display = 'block';
  link.style.display = 'block';
  link.href = 'http://www.opera.com';

} else if (browser.safari && browser.version <= 8) {

  wrap.style.display = 'none';
  nope.style.display = 'block';
  outdated.style.display = 'block';
  link.style.display = 'block';
  link.href = 'http://www.apple.com/safari/';

} else if (browser.firefox && browser.version <= 40) {

  wrap.style.display = 'none';
  nope.style.display = 'block';
  outdated.style.display = 'block';
  link.style.display = 'block';
  link.href = 'http://www.mozilla.com/firefox';

} else {

  // app
  var app = require('./app');

  // router
  var router = require('./router');

  // controllers
  var AboutCtrl = require('./controllers/AboutCtrl');
  var WorkCtrl = require('./controllers/WorkCtrl');
  var ContactCtrl = require('./controllers/ContactCtrl');
  var ProjectCtrl = require('./controllers/ProjectCtrl');
  var NavCtrl = require('./controllers/NavCtrl');
  var MapCtrl = require('./controllers/MapCtrl');

  // load images
  var Loader = require('./core/Loader');
  var loader = new Loader(config.manifest);

  console.log('Easter Egg: Type "what" + enter (not in the console. ;])');

}

