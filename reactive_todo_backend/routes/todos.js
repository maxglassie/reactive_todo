const express = require('express');
const router  = express.Router();

let todos = { todos: [ ] }

router.get('/', (req, res, next) => {
  res.send({
    todos
  })
})