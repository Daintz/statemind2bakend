const { request, response } = require('express')

const User = require('../model/user.model')

const { upperCaseAndLowerCase } = require('../helpers/passwordValidation')

const getUsers = async (req = request, res = response) => {
  const users = await User.findAll()

  if (!users) {
    const err = new Error('Users not found')
    return res.status(404).json({ msg: err.message })
  }

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

  if (!user) {
    const err = new Error('User not found')
    return res.status(404).json({ msg: err.message })
  }

  res.status(200).json({
    ok: true,
    status: 201,
    body: user
  })
}

const postUsers = async (req = request, res = response) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({
    where: { email }
  })

  if (userExists) {
    const err = new Error('User already registered')
    return res.status(404).json({ msg: err.message })
  }

  if (password.length < 6 || password.length > 18) {
    const err = new Error('The password must have between 6 and 18 characters')
    return res.status(404).json({ msg: err.message })
  }

  if (upperCaseAndLowerCase(password)) {
    const err = new Error('The password must have upper case and lower case')
    return res.status(404).json({ msg: err.message })
  }

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

const putUser = async (req = request, res = response) => {
  const id = req.params.id
  const user = await User.findOne({
    where: { id }
  })

  if (!user) {
    const err = new Error('User not found')
    return res.status(404).json({ msg: err.message })
  }

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

const deleteUser = async (req = request, res = response) => {
  const id = req.params.id
  const user = await User.findOne({
    where: { id }
  })

  if (!user) {
    const err = new Error('User not found')
    return res.status(404).json({ msg: err.message })
  }

  const deleteUser = await User.destroy({
    where: {
      id
    }
  })
  res.status(200).json({
    ok: true,
    status: 204,
    msg: 'Delete User',
    deleteUser
  })
}

module.exports = {
  getUsers,
  getUser,
  putUser,
  postUsers,
  deleteUser
}
