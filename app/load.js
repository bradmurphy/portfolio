'use strict';

/* Require all components in order to initialize application
 * and set up the single page app.
 */

// config and app
var config = require('./config');
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

