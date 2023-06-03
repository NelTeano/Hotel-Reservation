const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001; 


app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/get',(req,res)=>{

    res.send("Hello world");
} )

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root2468',
    database: 'hoteldb',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
  
    console.log('Connected to MySQL database');
  });


