const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');
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
        .expect((res) => {

          // eval(pry.it);
          expect(res.body).to.deep.include(
            expected_data
          );
        })
        .end(done)
    });
  });

  describe('POST /todos', () => {
    it('should save an item to the database', (done) => {
      request(app)
        .post('/todos')
        .send()
        .set('Accept', 'application/json')
    })
  })
});