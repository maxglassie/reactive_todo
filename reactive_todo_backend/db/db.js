'use strict'

const pry = require('pryjs');

let db = {
  todos: {
    todos: []
  },

  insertOne: function (todo) {
    this.todos.todos.push(todo);
  },

  clear: function () {
    this.todos = {
      todos: []
    };
  },

  all: function () {
    return this.todos;
  }
}

module.exports = db;