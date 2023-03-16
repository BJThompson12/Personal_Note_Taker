const express = require('express');

// import the modular routers for /apiRoutes
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/apiRoutes', apiRouter);

module.exports = app;