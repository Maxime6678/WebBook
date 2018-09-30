const express = require('express');
const path = require('path');
const app = express();

// Routes
const indexRoutes = require('./routes/indexRoute');

// Express config
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, './static')));

// Routing
app.use('/', indexRoutes);

// Create HTTP Server
app.set('port', process.env.PORT);
app.listen(app.get('port'), function() {
    console.log("Open to the world!");
})