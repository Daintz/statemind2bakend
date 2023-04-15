const { request, response } = require('express')

const User = require('../model/user.model')
const Role = require('../model/role.model')

const {
  lengthP,
  upperCaseAndLowerCaseP,
  spacesP,
  numbersP,
  isEmailE,
  isFullNameN
} = require('../helpers/validationsUser')

const getUsers = async(req = request, res = response) => {
  const users = await User.findAll({
    attributes: {
      exclude: ['RoleId']
    },
    include: [
      {
        model: Role,
        as: 'Role'
      }
    ]
  })

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

const getUser = async(req = request, res = response) => {
  const id = req.params.id

  const user = await User.findOne({
    where: { id },
    include: [
      {
        model: Role,
        as: 'Role'
      }
    ]
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

const postUsers = async(req = request, res = response) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({
    where: { email }
  })
  if (userExists) {
    const err = new Error('User already registered')
    return res.status(404).json({ msg: err.message })
  }

  if (lengthP(password)) {
    const err = new Error('The password must have between 6 and 18 characters')
    return res.status(404).json({ msg: err.message })
  }

  if (upperCaseAndLowerCaseP(password)) {
    const err = new Error('The password must have upper case and lower case')
    return res.status(404).json({ msg: err.message })
  }

  if (spacesP(password)) {
    const err = new Error('Spaces are not accepted in the password')
    return res.status(404).json({ msg: err.message })
  }

  if (numbersP(password)) {
    const err = new Error('The password must have numbers')
    return res.status(404).json({ msg: err.message })
  }

  if (isEmailE(email)) {
    const err = new Error('Email is not valid')
    return res.status(404).json({ msg: err.message })
  }

  if (isFullNameN(name)) {
    const err = new Error('Name is not valid')
    return res.status(404).json({ msg: err.message })
  }

  await User.sync()
  await User.create({
    name,
    email,
    password
  })

  const createdUser = await User.findOne({
    where: { email },
    include: [
      {
        model: Role,
        as: 'Role'
      }
    ]
  })

  res.status(200).json({
    ok: true,
    status: 201,
    msg: 'Created User',
    createdUser
  })
}

const putUser = async(req = request, res = response) => {
  const id = req.params.id
  const user = await User.findOne({
    where: { id }
  })

  if (!user) {
    const err = new Error('User not found')
    return res.status(404).json({ msg: err.message })
  }

  const { name, email, password } = req.body

  if (lengthP(password)) {
    const err = new Error('The password must have between 6 and 18 characters')
    return res.status(404).json({ msg: err.message })
  }

  if (upperCaseAndLowerCaseP(password)) {
    const err = new Error('The password must have upper case and lower case')
    return res.status(404).json({ msg: err.message })
  }

  if (spacesP(password)) {
    const err = new Error('Spaces are not accepted in the password')
    return res.status(404).json({ msg: err.message })
  }

  if (numbersP(password)) {
    const err = new Error('The password must have numbers')
    return res.status(404).json({ msg: err.message })
  }

  if (isEmailE(email)) {
    const err = new Error('Email is not valid')
    return res.status(404).json({ msg: err.message })
  }

  if (isFullNameN(name)) {
    const err = new Error('Name is not valid')
    return res.status(404).json({ msg: err.message })
  }

  await User.update(
    { name, email, password },
    {
      where: {
        id
      }
    }
  )

  const updatedUser = await User.findOne({
    where: { id },
    include: [
      {
        model: Role,
        as: 'Role'
      }
    ]
  })

  res.status(200).json({
    ok: true,
    status: 201,
    msg: 'Updated User',
    updatedUser
  })
}

const deleteUser = async(req = request, res = response) => {
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
