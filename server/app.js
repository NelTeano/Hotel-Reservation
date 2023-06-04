const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;
require('./shownet')(PORT);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// routes section
app.use('/', require('./routes/booking'));
app.use('/admin', require('./routes/admin'));

