const { request, response } = require('express')
const pool = require('../db/db')

const getUsers = async (req = request, res = response) => {
  const [result] = await pool.query('SELECT "method GET" AS result')
  res.status(201).json({
    msg: result[0]
  })
}

const postUsers = async (req = request, res = response) => {
  const { name, email, password } = req.body
  const [rows] = await pool.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  )
  res.json({
    id: rows.insertId,
    name,
    email,
    password
  })
}

const putUsers = async (req = request, res = response) => {
  const [result] = await pool.query('SELECT "method PUT" AS result')
  res.status(201).json({
    msg: result[0]
  })
}

const deleteUsers = async (req = request, res = response) => {
  const [result] = await pool.query('SELECT "method DELETE" AS result')
  res.status(201).json({
    msg: result[0]
  })
}

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers
}
