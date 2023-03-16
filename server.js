// require exress
const express = require('express');
//require path
const path = require('path');
//require the api routes
const api = require('./routes/apiRoutes.js')
const app = express();

const PORT = process.env.PORT || 3001;

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

// parse for web
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//set app to use route
app.use('/api', api);

app.use(express.static('public'));

// get home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/pages/index.html'));
});

// get route for notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
 });

// set listening on the port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});