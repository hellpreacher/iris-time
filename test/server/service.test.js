'use strict';

const should = require('should')
const request = require('supertest')
const service = require('../../server/service')

describe('The express service', () => {
    describe('GET /foo', () => {
        it('Should return HTTP 404', (done) => {
            request(service)
                .get('/foo')
                .expect(404, done)
        })
    })

    describe('GET /service/:location', () => {
        it('Should return HTTP 200 and a reply with valid result', (done) => {
            request(service)
                .get('/service/london')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    res.body.result.should.exist
                    return done()
                })
        })
    })
})