'use strict'

const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

router.get('/', (req, res, next) => {
  res.send(
    db.todos
  );
});

router.post('/', (req, res) => {
  let todo = req.body.todos;

  if (todo === undefined || todo === null) {
    res.status(400).send({
      error: "NO EMPTIES YO!"
    });
  } else {
    db.insertOne(todo);
    // we returned all the todos from our todo database to confirm
    // that it was inserted - wouldn't scale very well ;)
    const allTodos = db.all();

    res.status(201).send(allTodos);
  };
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