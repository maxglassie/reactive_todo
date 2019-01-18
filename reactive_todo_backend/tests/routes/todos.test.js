const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');
const pry = require('pryjs')

describe('Server', () => {

  let todos = {
    todos: ["push to master",
      "test in production"
    ]
  }

  describe('GET /todos', () => {
    it('should respond with todos', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {

          expect(res.body).include(
            todos
          );
        })
        .end(done)
    });
  });
});