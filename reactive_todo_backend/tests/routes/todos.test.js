'use strict'

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app'); 
const db  = require('../../db/db.js');


const pry = require('pryjs');

describe('Server', () => {

  afterEach("clears the db", () => {
    db.clear();
  });

  describe('GET /todos', () => {

    let expected_data = { todos: [ ] };

    it('should respond with empty todo database', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect( (res) => {
          expect(res.body).to.deep.include(expected_data);
        })
        .end(done)
    });
  });

  describe('POST /todos', () => {
    
    let params      = { todos: "push to prod" };
    let expected    = { todos: [ "push to prod" ] };
    let nullExpected= "NO EMPTIES YO!"
    let nullParams  = {}

    it('should save an item to the database and return 201 and all todos in db', (done) => {
      request(app)
      .post('/todos')
      .send(params)
      .set('Accept', 'application/json')
      .expect(201)
      .expect( (res) => {
        expect(res.body).to.deep.equal(expected);
      }).end(done);
    });

    it('should not save a null to the db', (done) => {
      request(app)
      .post('/todos')
      .send(nullParams)
      .set('Accept', 'application/json')
      .expect(400)
      .expect( (res) => {
        expect(res.body.error).to.deep.equal(nullExpected);
      }).end(done);
    });    
  });
});
