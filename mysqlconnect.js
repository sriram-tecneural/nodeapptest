const mysql = require("mysql2");
require("dotenv").config();

// Create connection pool (BEST PRACTICE)
const pool = mysql.createPool({
  host: process.env.DB_HOST || "db",       // Docker service name
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root123",
  database: process.env.DB_NAME || "mydb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export promise-based pool
module.exports = pool.promise();