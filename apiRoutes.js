// require the router to be used
const router = require('express').Router()
// require  path to add the file string
const path = require('path');
// require fs to read and write
const fs = require('fs')
// require the ID generator uuidv4() to use
const { v4: uuidv4 } = require('uuid');
const notesDatabase = require('./db/db.json') 

//get the information from the database
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));

  });

  router.post("/notes", (req, res) => {
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
        console.log(parsedData);
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
    router.delete("/notes/:id", (req, res) => {
      
      let id = req.params.id
      
      fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          const parsedData = JSON.parse(data);
          const index = parsedData.findIndex((element) => element.id === id)
          if (index !== -1){
            parsedData.splice(index, 1)
            fs.writeFile(
              "./db/db.json",
              JSON.stringify(parsedData, null, 5),
              (err) => {
                err ? console.log(err) : console.log("sucess");
              }
              );
            }
            res.send();
          }
        });
      });
    
      //export the router
      module.exports = router;



      // create a variable to require in the JSON
      // read the db JSON file 
      //write the db JSON
      
      // create post route to POST add the note to the db  
      // router.post('/notes', (req, res) => {
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