const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10
});

/** just a test:
 * 1. get one connection from connection pool.
 * 2. create a test table if it does not exists using the connection from the pool.
 * 3. release single connection back to the pool.
 * */
pool.getConnection((err, connection) => {
  if (err) {
    console.error('database.js: Error connecting to MySQL/MariadDB:', err);
    process.exit();
  } else {
    console.log('database.js: Connected to MySQL/MariadDB database');

    const createTestTable = `create table if not exists test (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      description VARCHAR(255)
    )`;

    connection.execute(createTestTable);
    connection.release();
  }
});

// ------- close all database connection pool on exit/close ------- 

function exitHandler(options, exitCode) {
  if (options.cleanup) {
    pool.end();
    console.log('database.js: MySQL/MariaDB connection pool closed');
  }

  if (exitCode || exitCode === 0) {
    console.log(exitCode);
  }

  if (options.exit) {
    process.exit();
  }
}

// on app close
process.on('exit', exitHandler.bind(null,{cleanup:true}));

// on ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// on "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

// on uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

// -------------- 

module.exports = pool;