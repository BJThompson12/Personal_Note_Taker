const express = require('express');
const path = require('path');

const router = require('./routes/apiRoutes.js')
const app = express();

const PORT = process.env.PORT || 3000;

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));

// parse for web
//app.use(express.urlencoded({extended: true}))
app.use(express.json());

// router to go back to home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// get from the home page to send the notes page
app.get('/notes', (req, res) => {
  test = (res.sendFile(path.join(__dirname + '/public/notes.html')));
  console.log(test);
  res.sendFile(path.join(__dirname, '/public/notes.html'))
 });
 
//set app to use route
app.use('/api', router);
// set app to use html route
// app.use('/', htmlRouter)

// set listening on the port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});