'use strict'

const expect = require('chai').expect;
const db = require('../db/db.js');

const pry = require('pryjs');

describe('db', () => {
  afterEach("clears the db", () => {
    db.clear();
  });

  describe('exists', () => {
    it('should be an object', () => {
      expect(typeof (db)).to.equal("object");
      expect(typeof (db)).to.not.equal(null);
    });
  });

  describe('has properties', () => {
    it('should have todos key', () => {
      expect(db.hasOwnProperty('todos')).to.equal(true);
    });

    it('should have clear key', () => {
      expect(db.hasOwnProperty('clear')).to.equal(true);
    });

    it('should have todos key that is an object with an empty array', () => {
      expect(db.todos).to.deep.equal({
        todos: []
      });
    });

  });

  describe('.insertOne', () => {
    it('should insert a single TODO', () => {
      const todo = "push to master";
      const expected = {
        todos: ["push to master"]
      };

      db.insertOne(todo);

      expect(db.todos).to.deep.equal(expected);
    });
  });

  describe('.clear', () => {
    it('should clear all todos', () => {
      db.insertOne("push to master");

      db.clear();
      let expected = {
        todos: []
      };

      expect(db.todos).to.deep.equal(expected);
    });
  });

  describe('.all', () => {
    it('should return all the todos as an array', () => {
      db.insertOne("push to master");
      db.insertOne("test in production");

      const expected = {
        todos: [
          "push to master",
          "test in production"
        ]
      };

      const returned = db.all();

      expect(returned).to.deep.equal(expected);
    });
  });
});