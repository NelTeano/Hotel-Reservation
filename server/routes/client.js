const express = require('express');
const client = express.Router();
const pool = require('../database');

// localhost:PORT/test
client.get('/test', (req, res) => {
  pool.execute('INSERT INTO `test` (`name`, `description`) VALUES (?, ?)', [
    'clientName',
    'I came from client'
  ], (err, result) => {
    if (err) {
      console.log('client query error', err);
    } else {
      console.log('affected rows = ', result.affectedRows);
      res.send('get request response from client');
    }
  });
});

module.exports = client;
