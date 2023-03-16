const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const htmlRouter = require('./routes/htmlRoutes');
const apiRouter = require('./routes/apiRoutes')

// middleware has to be in order bc it reads top to bottom of file
// parse TO JSON
app.use(express.json());
// parse for web
app.use(express.urlencoded({extended: true}))

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static('public'));

 // router to go back to home page
//  app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// // get from the home page to send the notes page
// app.get('/notes', (req, res) => {
//  res.sendFile(path.join(__dirname, './public/notes.html'));
// });

//set app to use route
app.use('/api', apiRouter);

app.use('/', htmlRouter)
// set app to use html route

// set listening on the port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});