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
  //res.json(JSON.parse(data))
  });

// create a variable to require in the JSON
// read the db JSON file 
//write the db JSON

// create post route to POST add the note to the db  
router.post('/api/notes', (req, res) => {
 // console.log(req.body);
 // create a varioable for the note note must include the unique id
 const newNote = {
   "title": req.body.title,
   "text": req.body.text,
   "id": uuidv4()
  }
  // add the note to the db object
  notesDatabase.push(newNote)
  
  // need to send the data to the database in json format
  fs.writeFileSync(path.join(__dirname, '../db/db.json'),
  JSON.stringify(notesDatabase, null, 2))
  res.json(notesDatabase);
});

// create router to to delete a note
router.delete('/api/notes/:id', (req, res) => {
  console.log(req.params.id);
  // locate the id and compare to slected id 
  for (let i = 0; i < notesDatabase.length; i++) {
      if (notesDatabase[i].id === req.params.id) {
        // remove the instance with that id from the array 
          notesDatabase.splice(i, 1);
      }
  }
  // write to the file in the database
  fs.writeFileSync(path.join(__dirname, '../db/db.json'),
  JSON.stringify(notesDatabase, null, 2))
  res.json(notesDatabase);
})

//export the router
module.exports = router;