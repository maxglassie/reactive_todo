'use strict'

const pry    = require('pryjs');

let db = { 
    todos: [ ],

    insertOne: function(todo) {
      this.todos.push(todo);
    },
  
    clear: function() {
      this.todos = []
    },

    all: function() {
      return this.todos;
    }
  }

module.exports = db;
