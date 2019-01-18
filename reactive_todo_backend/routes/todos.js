'use strict'

const express = require('express');
const router  = express.Router();


router.get('/', (req, res, next) => {
  res.send(
    todos_database
  );
});

module.exports = router;


// feature tests - 5%
  // as a user I go to the website and can see the thing
  // I can click a thing and a thing happens
  // system test
// integration tests - 10 - 20%
  // anytime there's more than one function involved
  // post route 
  // multiple functions in one function
// unit tests - 60 - 80% 
  // a single function 
  // it makes a database call
  // take one argument and returns one result

