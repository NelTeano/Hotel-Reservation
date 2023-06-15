const express = require('express');
const booking = express.Router();
const pool = require('../database');

function yyyymmdd(date) {
  const yyyy = date.getFullYear().toString().padStart(4, '0');
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');

  return `${yyyy}/${mm}/${dd}`;
}

// localhost:PORT/book/submit
// for the submit button in the booking form page.
booking.post('/submit', (req, res) => {
  console.log('req.body = ', req.body);

  pool.execute(
    'INSERT INTO `hotel_bookings` (`guest_name`, `check_in_date`, `check_out_date`, `room_type`, `num_guests`) VALUES (?, ?, ?, (SELECT id FROM room_types WHERE id=?), ?)', [
      `${req.body.lastName}, ${req.body.firstName}`,
      yyyymmdd(new Date(req.body.arriveDate)),
      yyyymmdd(new Date(req.body.departDate)),
      req.body.selectedRoomID,
      req.body.guests
    ], (err, result) => {
      if (err) {
        console.error('SQL ERROR : ', err);
      } else {
        console.debug('success - result : ', result);
      }
    }
  );

  res.status(200).json({ msg: 'form data received by the backend'});
});

booking.get('/getrooms', (req, res) => {
  pool.execute(`
  SELECT room_types.*, roomimages.room_url
  FROM room_types
  JOIN roomimages ON room_types.id = roomimages.room_type
`,
    (err, result) => {
      if (err) {
        res.status(500).send("Database error" + err.message);
      } else {
      
        const rooms = {};
        
        result.forEach((row) => {
          const roomId = row.id;
          if (!rooms[roomId]) {
            rooms[roomId] = {
              id: row.id,
              name: row.room_type,
              amenities: row.amenities,
              status: row.status,
              price: row.price,
              bed_type: row.bed_type,
              images: []
            };
          }
          rooms[roomId].images.push(row.room_url);
        });
    
        res.json(Object.values(rooms));
      }
    });
});

// localhost:PORT/book/calendar
// for the calendars picker page.
// send post request here after picking the arrival and departure date, and the number of child and adult.
booking.post('/calendar', (req, res) => {

  // check the database for available rooms based on data in the calendar picker page ...

  // create a json object that will contain all the information of each available
  // rooms that will be displayed in the /rooms page ...
});

// -------------------------------------------------------

// localhost:PORT/test
booking.get('/test', (req, res) => {
  pool.execute('INSERT INTO `hotel_bookings` (`guest_name`, `check_in_date`,`check_out_date`, `room_type`,`num_guests` ) VALUES (?, ?,?,?,?)', [
    'Maria',
    '2023-09-16',
    '2023-09-19',
    'deluxe',
    '2'
  ], (err, result) => {
    if (err) {
      console.log('booking query error', err);
    } else {
      console.log('affected rows = ', result.affectedRows);
      res.send('get request response from client');
    }
  });
});


//localhost:PORT/get/<id>
booking.get('/get/:id', (req,res) =>{
  const book_id = req.params.id;
  pool.execute('SELECT * FROM `hotel_bookings` WHERE id=?',[book_id], (err, result) =>{
    if (err) {
      console.log('booking query error', err);
    } else {
      console.log('affected rows = ', result.affectedRows);
      res.send(result);
    }
  } )
})

//localhost:PORT/api/book/
booking.post( '/api/book/', (req,res) => {

  const {guestName,checkinDate,checkoutDate,roomType,numGuest} = req.body;

  pool.execute('SELECT id FROM room_types WHERE room_type = ?', [roomType], (err, results) => {
    if (err) {
      console.log('Error querying the RoomTypes table:', err);
      return res.status(500).json({ error: 'An error occurred while processing the booking' });
    }

    if (results.length === 0) {
      console.log('Invalid roomType:', roomType);
      return res.status(400).json({ error: 'Invalid roomType' });
    }

    const roomTypeId = results[0].id;

    // Insert the booking into the bookings table
    pool.execute(
      'INSERT INTO hotel_bookings (guest_name, check_in_date, check_out_date, room_type, num_guests) VALUES (?, ?, ?, ?, ?)',
      [guestName, checkinDate, checkoutDate, roomTypeId, numGuest],
      (error, result) => {
        if (error) {
          console.log('Error inserting into Rooms table:', error);
          return res.status(500).json({ error: 'An error occurred while processing the booking' });
        }

        console.log('affected rows = ', result.affectedRows);
        res.send('post success');
      }
    );
  });
});


module.exports = booking;
