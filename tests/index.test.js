const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, DevOps!');
});

describe('GET /', () => {
  it('should return Hello, DevOps!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, DevOps!');
  });
});