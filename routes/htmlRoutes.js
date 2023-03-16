// require the router to be used
//const router = require('express').Router();
const express = require('express')
const htmlRouter = express.Router()
// // require  path to add the file string
 const path = require('path');

 
 // get from the home page to send the notes page
 htmlRouter.get('/notes', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/notes.html'));
  });
 // router to go back to home page
 htmlRouter.get('*', (req, res, next) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
   next()
  });

module.exports = htmlRouter;