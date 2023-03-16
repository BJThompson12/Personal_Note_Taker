const express = require('express');
// const htmlRouter = require('./routes/htmlRoutes');
//const html2Router = require('./routes/html2Route');
const path = require('path');
const apiRouter = require('./routes/apiRoutes')
const app = express();
const PORT = process.env.PORT || 3001;

// parse for web
app.use(express.urlencoded({extended: true}))
app.use(express.json());
// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));

 // get from the home page to send the notes page
 app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'))
  console.log(__filename);
  test = __dirname, './public/notes.html'
  console.log(test);
 });
// router to go back to home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
 });



//set app to use route
app.use('/api', apiRouter);
// set app to use html route
// app.use('/', htmlRouter)

// set listening on the port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});