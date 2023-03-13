// require the router to be used
const router = require('express').Router();
// require  path to add the file string
const path = require('path');
// require express
const express = require('express');
// require path to 
const app = express();
// require database to send data to
const notesDatabase = require('../db/db.json')

// get from the home page to send the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//get the information from the posted note
router.get('/api/notes', (req, res) => {
  // console.log(res.json());
  // console.log('i got the data');

  // need to send the data to the database in json format
});
router.post('/api/notes', (req, res) => {
  console.log(req.body);
  console.log('i got the data');

  // need to send the data to the database in json format
});

//export the router
module.exports = router;