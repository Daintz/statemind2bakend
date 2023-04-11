const { request, response } = require('express')
const pool = require('../db/db')

const getUsers = async (req = request, res = response) => {
  const [result] = await pool.query('SELECT "method GET" AS result')
  res.status(201).json({
    msg: result[0]
  })
}

const putUsers = async (req = request, res = response) => {
  const [result] = await pool.query('SELECT "method PUT" AS result')
  res.status(201).json({
    msg: result[0]
  })
}

const postUsers = async (req = request, res = response) => {
  const [result] = await pool.query('SELECT "method POST" AS result')
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
