var express = require('./config/express');
var app = express();
var port = process.env.PORT || 3000;

app.listen(port);
console.log("Listen port: 3000");
