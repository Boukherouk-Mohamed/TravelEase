const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
// const bcrypt = require('bcrypt');
const crypto = require('crypto');
const PORT = 5000;

const { calculateDaysDifference } = require('./utils'); // Import the calculateDaysDifference function



app.use(express.json());
app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'travelease',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});



app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Query the database to retrieve the user's information
    connection.query(
      'SELECT * FROM users WHERE username = ? AND password = ?',
      [username , password],
      (error, results) => {
        if (error) {
          console.error('Error executing the database query:', error);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        // Check if a user with the given username exists
        if (results.length === 0) {
          res.status(401).json({ error: 'Invalid credentials' });
          return;
        }
  
        const user = results[0];
  
        // Compare the provided password with the stored password
        if (password === user.password) {
          // Passwords match, generate a random token
          const token = crypto.randomBytes(32).toString('hex');
          res.json({ token });
        } else {
          // Passwords do not match
          res.status(401).json({ error: 'Invalid credentials' });
        }
      }
    );
  });



  
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
  
    // Check if the username already exists in the database
    connection.query(
      'SELECT * FROM users WHERE username = ?',
      [username],
      (error, results) => {
        if (error) {
          console.error('Error executing the database query:', error);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
  
        if (results.length > 0) {
          res.status(409).json({ error: 'Username already exists' });
          return;
        }
  
        // Generate a random token
        const token = crypto.randomBytes(32).toString('hex');
  
        // Insert the user into the database
        connection.query(
          'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
          [username, email, password],
          (error) => {
            if (error) {
              console.error('Error executing the database query:', error);
              res.status(500).json({ error: 'Internal server error' });
              return;
            }
  
            res.json({ token });
          }
        );
      }
    );
  });


  app.get('/dashboard', (req, res) => {
    // Fetch data from the database
    connection.query('SELECT name, price, image FROM products', (error, results) => {
      if (error) {
        console.error('Error executing the database query:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(results);
    });
  });





  // Hotels


  app.get('/api/hotels', (req, res) => {
    const query = 'SELECT * FROM hotels'; // Replace 'hotels' with your table name
  
    // Execute the query
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching hotels:', err);
        console.trace(); // Print the stack trace
        res.status(500).json({ message: 'Error fetching hotels' });
      } else {
        res.json(results);
      }
    });
  });
  


  app.post('/api/searchHotel', (req, res) => {
    const dataFromFrontend = req.body; // The data sent from the frontend
  
    console.log(dataFromFrontend);
  
    // Extract the address from the data sent by the frontend
    const { adresse } = dataFromFrontend;
    // Perform the database query to filter hotels based on the address
    const query = `SELECT * FROM hotels WHERE adresse LIKE '%${adresse}%'`;
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching hotels:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        const daysNumber = calculateDaysDifference(dataFromFrontend.check_in, dataFromFrontend.check_out);
        const personsNumber = dataFromFrontend.personsNumber;
        // Send the response back to the frontend with the filtered hotel data, daysNumber, and personsNumber
        res.json({ hotels: results, daysNumber: daysNumber, personsNumber: personsNumber });
      }
    });
  });


  app.post('/api/searchHotelFromStorage', (req, res) => {
    const dataFromFrontend = req.body; // The data sent from the frontend
  
    // console.log(dataFromFrontend);
  
    // Extract the address from the data sent by the frontend
    const { adresseToSearch } = dataFromFrontend;
    console.log(adresseToSearch);
    // Perform the database query to filter hotels based on the address
    const query = `SELECT * FROM hotels WHERE adresse LIKE '%${adresseToSearch}%'`;
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching hotels:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        // const daysNumber = calculateDaysDifference(dataFromFrontend.check_in, dataFromFrontend.check_out);
        // const personsNumber = dataFromFrontend.personsNumber;
        // Send the response back to the frontend with the filtered hotel data, daysNumber, and personsNumber
        res.json({ hotelsFiltred: results });
      }
    });
  });


  
app.post('/api/searchHotelsFromStorage', (req, res) => {
  const filters = req.body;
  // console.log(filters)

  let query = `SELECT * FROM hotels WHERE adresse like '%${filters.HotelAdresse}%'`;

  if (filters.beach) {
    query += ' AND beach = "yes"';
  }
  if (filters.swimmingPool) {
    query += ' AND swiming_pool = "yes"';
  }
  if (filters.guestHouse) {
    query += ' AND guest_house = "yes"';
  }
  if (filters.price) {    
    query += ` AND price <= ${filters.price}`;
  }
  const selectedRatings = [];
  if (filters.ThreeStars) {
    selectedRatings.push('3Stars');
  }
  if (filters.FourStars) {
    selectedRatings.push('4Stars');
  }
  if (filters.FiveStars) {
    selectedRatings.push('5Stars');
  }

  if (selectedRatings.length > 0) {
    const ratingsFilter = selectedRatings.map(rating => `rating = "${rating}"`).join(' OR ');
    query += ` AND (${ratingsFilter})`;
  }
 
  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching cars:', err);
      console.trace();
      res.status(500).json({ message: 'Error fetching cars' });
    } else {
     
      res.json({ results: results });
    }
  });
});




  
app.post('/api/hotelPictures', (req, res) => {
  const { id_hotel } = req.body;



  // Query the database to retrieve the user's information
  connection.query(
    'SELECT * FROM hotels_pictures WHERE id_hotel LIKE ?',
    [id_hotel ],
    (error, results) => {
      if (error) {
        console.error('Error executing the database query:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      // Check if a user with the given username exists
      if (results.length === 0) {
        res.status(401).json({ error: 'Ino pictures for such hotel' });
        return;
      }

      const hotelsPictures = results;
      // console.log(hotelsPictures);

            // Send the hotel pictures data as a response
            res.status(200).json(hotelsPictures);

    }
  );
});




  
app.post('/api/sendHotelUserInfos', (req, res) => {
  const userData = req.body; // The data sent from the frontend

  console.log(userData);

  // Extract the address from the data sent by the frontend
  const { name , email , phone , birthday ,id_hotel, reservation_checkin,reservation_checkout  } = userData;
  // console.log( name , email , phone , birthday )
  // Perform the database query to filter hotels based on the address
   const query = `INSERT INTO reservations_hotels (id_hotel, fullname, email, phonenumber, birthday, reservation_checkin, reservation_checkout) VALUES (?, ?, ?, ?, ?, ?, ?)`;


  connection.query(query,[id_hotel, name , email , phone , birthday,reservation_checkin,reservation_checkout] ,(err, results) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Data saved successfully');
      // const daysNumber = calculateDaysDifference(dataFromFrontend.check_in, dataFromFrontend.check_out);
      // const personsNumber = dataFromFrontend.personsNumber;
      // Send the response back to the frontend with the filtered hotel data, daysNumber, and personsNumber
       res.json({response : results});
    }
  });
});



app.post('/api/searchCarsFromStorage', (req, res) => {
  const filters = req.body;
  // console.log(filters)

  let query = `SELECT * FROM cars WHERE adresse like '%${filters.carAdresse}%'`;

  if (filters.airConditioning) {
    query += ' AND air_conditioning = "Yes"';
  }
  if (filters.doors4) {
    query += ' AND doors = 4';
  }
  if (filters.doors2) {
    query += ' AND doors = 2';
  }
  if (filters.price) {  
    query += ` AND price <= ${filters.price}`;
  }
  if (filters.transmissionAutomatic) {
    query += ' AND transmission = "Automatic"';
  }
  if (filters.transmissionManual) {
    query += ' AND transmission = "Manual"';
  }
  if (filters.typeHybrid) {
    query += ' AND type = "Hybrid"';
  }
  if (filters.typeElectric) {
    query += ' AND type = "Fully electric"';
  }
  if (filters.typeFuel) {
    query += ' AND type = "Fuel"';
  }
  if (filters.typeSmall) {
    query += ' AND category = "Small"';
  }
  if (filters.typeFamilial) {
    query += ' AND category = "Familial"';
  }
  if (filters.typeLarge) {
    query += ' AND category = "Large"';
  }

  // Fetch reservations data from the database
  connection.query('SELECT * FROM car_rents', (err, reservations) => {
    if (err) {
      console.error('Error fetching reservations:', err);
      res.status(500).json({ message: 'Error fetching reservations' });
    } else {
      // Execute the query to get available cars
      connection.query(query, (err, availableCars) => {
        if (err) {
          console.error('Error fetching cars:', err);
          res.status(500).json({ message: 'Error fetching cars' });
        } else {
          // Now, let's filter out cars with overlapping reservations
          const overlappingCars = availableCars.filter(car => {
            const overlappingReservations = reservations.filter(
              reservation =>
                reservation.id_car === car.id &&
                (
                  (reservation.rent_checkin >= filters.checkInCAr && reservation.rent_checkin <= filters.checkOutCAr) ||
                  (reservation.rent_checkout >= filters.checkInCAr && reservation.rent_checkout <= filters.checkOutCAr)
                )
            );
            return overlappingReservations.length === 0;
          });

          res.json({ results: overlappingCars });
        }
      });
    }
  });
});






// Cars :


app.get('/api/cars', (req, res) => {
  const query = 'SELECT * FROM cars'; // Replace 'hotels' with your table name

  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching cars:', err);
      console.trace(); // Print the stack trace
      res.status(500).json({ message: 'Error fetching hotels' });
    } else {
      res.json(results);
    }
  });
});



app.post('/api/searchCars', (req, res) => {
  const { adresse, check_in, check_out } = req.body;

  console.log('adresse:', adresse);
  console.log('check_in:', check_in);
  console.log('check_out:', check_out);

  // Perform the database query to filter cars based on the address
  const query = `SELECT * FROM cars WHERE adresse LIKE '%${adresse}%'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching cars:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const daysNumber = calculateDaysDifference(check_in, check_out);

      // Send the response back to the frontend with the filtered hotel data, daysNumber, and personsNumber
      res.json({ cars: results, daysNumber: daysNumber });
    }
  });
});

  
app.post('/api/carsPictures', (req, res) => {
  const { id_car } = req.body;



  // Query the database to retrieve the user's information
  connection.query(
    'SELECT * FROM cars_pictures WHERE id_car LIKE ?',
    [id_car ],
    (error, results) => {
      if (error) {
        console.error('Error executing the database query:', error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      // Check if a user with the given username exists
      if (results.length === 0) {
        res.status(401).json({ error: 'no pictures for such car' });
        return;
      }

      const carsPictures = results;
      // console.log(carsPictures);

            // Send the hotel pictures data as a response
            res.status(200).json(carsPictures);

    }
  );
});





  
app.post('/api/sendCarUserInfos', (req, res) => {
  const userData = req.body; // The data sent from the frontend

  console.log(userData);

  // Extract the address from the data sent by the frontend
  const { name , email , phone , birthday ,id_car, rent_checkin,rent_checkout  } = userData;
  // console.log( name , email , phone , birthday )
  // Perform the database query to filter hotels based on the address
   const query = `INSERT INTO car_rents (id_car, fullname, email, phonenumber, birthday, rent_checkin, rent_checkout) VALUES (?, ?, ?, ?, ?, ?, ?)`;


  connection.query(query,[id_car, name , email , phone , birthday,rent_checkin,rent_checkout] ,(err, results) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Data saved successfully');
      // const daysNumber = calculateDaysDifference(dataFromFrontend.check_in, dataFromFrontend.check_out);
      // const personsNumber = dataFromFrontend.personsNumber;
      // Send the response back to the frontend with the filtered hotel data, daysNumber, and personsNumber
       res.json({response : results});
    }
  });
});




// Flights 

app.post('/api/sendFlightInfos', (req, res) => {
  const userData = req.body; // The data sent from the frontend

  console.log(userData);

  // Extract the address from the data sent by the frontend
  const { name, email, phone, birthday, id_flight, flight_checkin, from, to } = userData;

  // Perform the database query to insert flight reservation data
  const query = `INSERT INTO flights_reservation (id_flight, fullname, birthday, email, phonenumber, check_in_reservation, \`from\`, \`to\`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(query, [id_flight, name, birthday, email, phone, flight_checkin, from, to], (err, results) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      console.log('Data saved successfully');
      // Send the response back to the frontend with the result of the insertion
      res.json({ response: results });
    }
  });
});




  
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });