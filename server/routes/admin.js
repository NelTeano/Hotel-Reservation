const express = require('express');
const admin = express.Router();
const pool = require('../database');

// localhost:PORT/admin/test
admin.get('/test', (req, res) => {
  pool.execute('INSERT INTO `test` (`name`, `description`) VALUES (?, ?)', [
    'adminName',
    'I came from admin'
  ], (err, result) => {
    if (err) {
      console.log('admin query error', err);
    } else {
      console.log('affected rows = ', result.affectedRows);
    }
  });

  res.send('GET REQUEST RESPONSE FROM ADMIN');
});

module.exports = admin;