const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

const index = require('./routes/index');

const app = express();
app.set('port',3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client')));
app.use(favicon(path.join(__dirname, 'client', 'images', 'favicon.ico')));

app.use('/', index);

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});