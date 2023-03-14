// require the router to be used
const router = require('express').Router();
// // require  path to add the file string
 const path = require('path');

// get from the home page to send the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

  // router to go back to home page
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

module.exports = router;