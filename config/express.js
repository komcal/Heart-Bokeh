var express = require('express');
var app = express();
var multer = require('multer'),
	  bodyParser = require('body-parser'),
	  path = require('path');

module.exports = function(){
  app.use(bodyParser.json());
  app.set('views','./app/views/');
  app.set('view engine', 'jade');
	app.use(express.static('./public'));
	app.use('/downloads', express.static('downloads'));
	// app.use('/uploads', express.static('uploads')); // for test
	require('../app/routes/index.routes')(app);
  require('../app/routes/upload.routes')(app);

  return app;
}
