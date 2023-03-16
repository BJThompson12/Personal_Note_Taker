// const express = require('express');
// const path = require('path');

// const router = require('./routes/apiRoutes.js')
// const app = express();

// const PORT = process.env.PORT || 3000;

// // To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
// app.use(express.static('public'));

// // parse for web
// //app.use(express.urlencoded({extended: true}))
// app.use(express.json());

// // router to go back to home page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/index.html'));
// });

// // get from the home page to send the notes page
// app.get('/notes', (req, res) => {
//   console.log(__dirname);
//   res.sendFile(path.join(__dirname, '/public/notes.html'))
//  });
 
// //set app to use route
// app.use('/api', router);
// // set app to use html route
// // app.use('/', htmlRouter)

// // set listening on the port
// app.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`);
// });

const express = require("express");
const path = require("path");
const router = require("./routes/apiRoutes.js");
// app declared as the instance of express
const app = express();
// PORT is declared to process enviornemnt variables OR 3001
const PORT = process.env.PORT || 3000;
// Middleware to parse
app.use(express.static("public"));
app.use(express.json());
// get request so that the root url is sent the file index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
// get request so that the /notes endpoint is sent the file notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);
// Middleware for all apiRouter to be prefixed with /api
// see routes/api.js for more info.
app.use("/api", router);
//Declare the server to listen on specified PORT
app.listen(PORT, () => {
  console.log(`serverlisteningport:${PORT}`);
});