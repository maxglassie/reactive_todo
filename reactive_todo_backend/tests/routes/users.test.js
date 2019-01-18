'use strict'

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('users', () => {
    describe('GET /users', () => {
        it('should return "respond with a resource"', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).include({
                        sentence: 'respond with a resource'
                    });
                })
                .end(done);
        });
    });
});