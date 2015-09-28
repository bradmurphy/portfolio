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
var ProjectsCtrl = require('./controllers/ProjectsCtrl');
var ContactCtrl = require('./controllers/ContactCtrl');
var MapCtrl = require('./controllers/MapCtrl');

// load images
var Loader = require('./core/Loader');
var loader = new Loader(config.manifest);

