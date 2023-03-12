// require the router to be used
const router = require('express').Router();
// require  path to add the file string
const path = require('path');
// require express
const express = require('express');
// require path to 
const app = express();

// get from the home page to send the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//export the router
module.exports = router;