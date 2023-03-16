// require the router to be used
//const router = require('express').Router();
const express = require('express')
const html2Router = express.Router()
// // require  path to add the file string
 const path = require('path');

 
 // get from the home page to send the notes page
 html2Router.get('/notes', (req, res) => {
   res.sendFile(path.join(__dirname, '/../public/notes.html'))
  });


module.exports = html2Router;