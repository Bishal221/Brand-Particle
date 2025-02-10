const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10,
});

// Export a query function using callbacks
const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        console.error("Database query error: ", error); // Log the error for debugging
        return reject(error);
      }
      resolve(results || []); // Ensure that results is always an array
    });
  });
};


module.exports = { query };
