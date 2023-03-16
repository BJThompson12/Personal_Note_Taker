// require the router to be used
const router = require('express').Router()
// require  path to add the file string
const path = require('path');

// get route for notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/notes.html'))
 });

 // get home page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/index.html'));
  console.log(__dirname);
});

// exports the router module for use in the main server file
