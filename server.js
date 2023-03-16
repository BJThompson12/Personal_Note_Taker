const express = require('express');
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");
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
app.use('/', htmlRouter);
//set app to use route
app.use('/api', apiRouter);

// set listening on the port

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});