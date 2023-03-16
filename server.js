// require exress
const express = require('express');
//require path
const path = require('path');
//require the api routes
const apiRoutes = require('./routes/apiRoutes.js')
//const htmlRoutes = require('./routes/htmlRoutes.js')
const app = express();

const PORT = process.env.PORT || 3001;

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

// parse for web
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
//set app to use route
app.use('/api', apiRoutes);
//app.use('/', htmlRoutes)
/*
// get home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/pages/index.html'));
  console.log(__dirname);
});

// get route for notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
 });
 */
// set listening on the port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});