const express = require('express');
const APIroutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware has to be in order bc it reads top to bottom of file
// parse TO JSON
app.use(express.json());
// parse for web
app.use(express.urlencoded({extended: true}))

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));

// set app to use html route
app.use('/', htmlRoutes);
//set app to use route
app.use('/', APIroutes);

// set listening on the port

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});