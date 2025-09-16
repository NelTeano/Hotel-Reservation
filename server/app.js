const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
require('./shownet')(PORT);

// --- API routes FIRST ---
app.use('/api/rooms', require('./routes/rooms'));
app.use('/api/book', require('./routes/booking'));





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
