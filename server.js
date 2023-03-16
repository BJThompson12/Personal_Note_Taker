const express = require('express');
const apiRouter = require('./routes/apiRoutes')
const htmlRouter = require('./routes/htmlRoutes');
const html2Router = require('./routes/html2Route');
const app = express();
const PORT = process.env.PORT || 3001;

// parse for web
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// middleware has to be in order bc it reads top to bottom of file
// parse TO JSON

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

//set app to use route
app.use('/api', apiRouter);
app.use(express.static('public'));
app.use('/', htmlRouter)
// set app to use html route
app.use('/', html2Router)
// set listening on the port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});