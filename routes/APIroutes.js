// require the router to be used
const router = require('express').Router();
// require  path to add the file string
 const path = require('path');
 // require fs to read and write
 const fs = require('fs')
// require database to read and write and send data to
const notesDatabase = require('../db/db.json')
// require the ID generator
// uuidv4() to use
const { v4: uuidv4 } = require('uuid');


//get the information from the database
router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
  });

//call out the store and then define the date read and write the data
//create method to get the notes 

//util.permissify 
// needd to requre util and fs - create the methods in your varioables - always need a return in the methos and can be used

// create a variable to require in the JSON
// read the db JSON file 
//write the db JSON

  
router.post('/api/notes', (req, res) => {
  console.log(req.body);
  console.log('i got the data');

  // need to send the data to the database in json format
});

//export the router
module.exports = router;