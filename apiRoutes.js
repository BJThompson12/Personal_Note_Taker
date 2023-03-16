// require the router to be used
const router = require('express').Router();
// require  path to add the file string
const path = require('path');
// require fs to read and write
const fs = require('fs');
// require the ID generator uuidv4() to use
const { v4: uuidv4 } = require('uuid');
const notesDatabase = require('./db/db.json');

//get the information from the database
router.get('/notes.html', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
  console.log(notesDatabase);
});

// set a POST to add a created note
router.post('/notes.html', (req, res) => {
  let title = req.body.title;
  let text = req.body.text;
  let id = uuidv4();
  console.log(id);
  const newData = {
    title,
    text,
    id,
  };
  // read the current db
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(newData);
      // wrtie the new database
      fs.writeFile(
        './db/db.json',
        JSON.stringify(parsedData, null, 5),
        (err) => {
          err ? console.log(err) : console.log('sucess');
        }
      );
      res.send();
    }
  });
});

// create router to to delete a note
router.delete('/notes/:id', (req, res) => {
  // declare the id of what was clicked
  let id = req.params.id;
  // read the current db
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const parsedData = JSON.parse(data);
      // match the id's
      const index = parsedData.findIndex((element) => element.id === id);
      if (index !== -1) {
        parsedData.splice(index, 1);
        // write the db
        fs.writeFile(
          './db/db.json',
          JSON.stringify(parsedData, null, 5),
          (err) => {
            err ? console.log(err) : console.log('sucess');
          }
        );
      }
      res.send();
    }
  });
});

//export the router
module.exports = router;