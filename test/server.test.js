const request = require('supertest');
const server  = require('../src/server');

describe('GET /', () => {
    test('responds with json', async ()=> {
        const response = await request(server).get('/').send();
        expect(response.statusCode).toBe(200);
    
    });
  });