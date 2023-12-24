const express = require('express');
const bodyParser = require('body-parser');
const profilesRoutes = require('./lib/server/profiles.routes');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:8080', // Replace with your client's address
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // If you're using cookies or authentication
  })
);

app.use(express.static(path.join(__dirname, 'lib/frontend/css')));
app.use(express.static(path.join(__dirname, 'static/Pictures')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(profilesRoutes);

app.set('view engine', 'ejs');
app.set('views', 'src/template');

module.exports = app;
