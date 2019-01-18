const express = require('express');
const router  = express.Router();

// we update the object acts like a db
// todos as a topic and Kafka stores the state?

let todos_database = { 
              todos: [ 
                      // "push to master",
                      // "test in prod" 
                      ] 
            }

// clear(todos_database)
// update(todos_database, "String")
// todos_database.all

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

