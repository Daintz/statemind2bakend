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

const getUser = async (req = request, res = response) => {
  const id = req.params.id
  const user = await User.findOne({
    where: { id }
  })
  res.status(200).json({
    ok: true,
    status: 201,
    body: user
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
  const id = req.params.id
  const { name, email, password } = req.body
  const updateUser = await User.update(
    { name, email, password },
    {
      where: {
        id
      }
    }
  )
  res.status(200).json({
    ok: true,
    status: 201,
    msg: 'Updated User',
    updateUser
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
  getUser,
  putUsers,
  postUsers,
  deleteUsers
}
