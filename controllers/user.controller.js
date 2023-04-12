const { request, response } = require('express')
const pool = require('../db/db')

const User = require('../model/user.model')

const getUsers = async (req = request, res = response) => {
  const users = await User.findAll()
  res.status(200).json({
    ok: true,
    status: 201,
    body: users
  })
}

const postUsers = async (req = request, res = response) => {
  const { name, email, password } = req.body
  await User.sync()
  const createUser = await User.create({
    name,
    email,
    password
  })
  res.status(200).json({
    ok: true,
    status: 201,
    msg: 'Created User',
    createUser
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
