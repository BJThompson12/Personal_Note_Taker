// require the router to be used
const router = require('express').Router();
// // require  path to add the file string
 const path = require('path');

// // require path to 
// const app = express();
// // require database to send data to
// const notesDatabase = require('../db/db.json')


//get the information from the posted note
router.get('/api/notes', (req, res) => {
  // console.log(res.json());
  // console.log('i got the data');

//call out the store and then define the date read and write the data
//create method to get the notes 

//util.permissify 
// needd to requre util and fs - create the methods in your varioables - always need a return in the methos and can be used

// create a variable to require in the JSON
// read the db KSON file 
//write the db JSON

  
  // need to send the data to the database in json format
});
router.post('/api/notes', (req, res) => {
  console.log(req.body);
  console.log('i got the data');

  // need to send the data to the database in json format
});

//export the router
module.exports = router;