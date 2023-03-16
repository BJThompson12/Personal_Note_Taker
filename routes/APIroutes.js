// require the router to be used
//const apiRouter = require('express').Router();
const express = require('express')
const apiRouter = express.Router()
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
apiRouter.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
  //res.json(JSON.parse(data))
  });

// create a variable to require in the JSON
// read the db JSON file 
//write the db JSON

// create post route to POST add the note to the db  
// apiRouter.post('/notes', (req, res) => {
//  // console.log(req.body);
//  // create a varioable for the note note must include the unique id
//  const newNote = {
//    "title": req.body.title,
//    "text": req.body.text,
//    "id": uuidv4()
//   }
//   // add the note to the db object
//   notesDatabase.push(newNote)
  
//   // need to send the data to the database in json format
//   fs.writeFile((__dirname, '../db/db.json'),
//   JSON.stringify(notesDatabase, null, 2))
//   res.json(notesDatabase);
// });

apiRouter.post("/notes", (req, res) => {
  const { title, text } = req.body;
  let id = uuidv4();
  console.log(id);
  const newData = {
    title,
    text,
    id,
  };
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(newData);
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(parsedData, null, 5),
        (err) => {
          err ? console.log(err) : console.log("sucess");
        }
      );
      res.send();
    }
  });
});

// create router to to delete a note
// apiRouter.delete('/notes/:id', (req, res) => {
//   console.log(req.params.id);
//   // locate the id and compare to slected id 
//   for (let i = 0; i < notesDatabase.length; i++) {
//       if (notesDatabase[i].id === req.params.id) {
//         // remove the instance with that id from the array 
//           notesDatabase.splice(i, 1);
//       }
//   }
//   // write to the file in the database
//   fs.writeFile(path.join(__dirname, '../db/db.json'),
//   JSON.stringify(notesDatabase, null, 2))
//   res.json(notesDatabase);
// })

//export the router
module.exports = apiRouter;