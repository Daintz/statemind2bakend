const { request, response } = require('express')

const getUsers = (req = request, res = response) => {
  res.status(201).json({
    msg: 'method GET'
  })
}

const putUsers = (req = request, res = response) => {
  res.status(201).json({
    msg: 'method PUT'
  })
}

const postUsers = (req = request, res = response) => {
  res.status(201).json({
    msg: 'method POST'
  })
}

const deleteUsers = (req = request, res = response) => {
  res.status(201).json({
    msg: 'method DELETE'
  })
}

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers
}
