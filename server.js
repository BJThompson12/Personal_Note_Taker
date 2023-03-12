const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes/routes.js");


// //set app to use routes
app.use('/', routes);
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));

// You can get POST body data using express.json() or express.urlencoded() to support JSON and URL-encoded bodies

// parse TO JSON
app.use(express.json());
// parse for web
app.use(express.urlencoded({extended: true}))


// set listening on the port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});