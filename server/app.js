const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const PORT = process.env.PORT;
require('./shownet')(PORT);

app.use(express.json());

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// routes section
app.get('/', (req, res) => {
  res.status(200).sendFile('index.html', { root: './public' });
});

app.use('/rooms', require('./routes/rooms'));
app.use('/book', require('./routes/booking'));

//test 