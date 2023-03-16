// require exress
const express = require('express');
//require path
const path = require('path');
//require the api routes
const apiRoutes = require('./apiRoutes.js')
// require the html routs
const htmlRoutes = require('./htmlRoutes.js')
const app = express();
 //define listening port
const PORT = process.env.PORT || 3001;

// parse for web
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static(path.join(__dirname, 'public')));

//set app to use route
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

// set listening on the port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} 🚀`);
});