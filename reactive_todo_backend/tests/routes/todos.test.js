'use strict'

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app'); 
const db  = require('../../db/db.js')

const pry = require('pryjs')

describe('Server', () => {

  // beforeAll(
  //   // clear_db
  //   // insertdb info
  //   //   
  //   )

  // afterAll(
  //   // clear db
  //   )

  describe('GET /todos', () => {
    // data setup
    let expected_data = { 
              todos: [ 
                      // "push to master",
                      // "test in prod" 
                      ] 
              }
    it('should respond with empty todo database', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect( (res) => {

          // eval(pry.it);
          expect(res.body).to.deep.include(
            expected_data
            );
        })
        .end(done)
    });
  });

  describe('POST /todos', () => {
    
    let params   = { todos: "push to prod" }
    let expected = { todos: "push to prod" }

    it('should save an item to the database', (done) => {
      request(app)
      .post('/todos')
      .send(params)
      .set('Accept', 'application/json')
      .expect(200, params, done);
    });
  });

  // describe db
});













