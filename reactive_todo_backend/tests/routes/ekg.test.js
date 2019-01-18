'use strict'

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app');

describe('ekg', () => {
    it('should respond with a 200 and OK', (done) => {
        request(app)
            .get('/ekg')
            .expect(200)
            .expect((res) => {
                expect(res.body).include({
                    status: 'OK'
                });
            })
            .end(done)
    });
});