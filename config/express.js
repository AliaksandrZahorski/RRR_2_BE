let bodyParser = require('body-parser');
let express = require('express');
let fs = require('fs')
let path = require('path');
let appDir = path.dirname(require.main.filename);
let blogRoutes = require('../app/blog.routes');
let userRoutes = require('../app/user.routes');
let defaultRoutes = require('../app/default.routes');
const favicon = require('serve-favicon');
const cors = require('cors');

const BASE_PATH = '/';

module.exports = () => {
  let app = express();

  app.use(favicon(path.join(appDir, '/public/favicon.ico')));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.options('*', cors());

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use(`${BASE_PATH}blogs`, blogRoutes);
  app.use(`${BASE_PATH}user`, userRoutes);
  app.use(`${BASE_PATH}*`, defaultRoutes);

  return app;
};
