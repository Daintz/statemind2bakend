const { createPool } = require('mysql2/promise')

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'statemindbd'
})

module.exports = pool
