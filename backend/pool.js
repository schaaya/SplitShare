/* eslint-disable no-throw-literal */
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: 'Password',
  database: 'splitwise',
});

pool.getConnection((err) => {
  if (err) {
    throw `Error occured: ${err}`;
  } else {
    console.log('Connected!');
  }
});

module.exports = pool;
