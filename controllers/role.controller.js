const { request, response } = require('express')

const Role = require('../model/role.model')

const getRoles = async(req = request, res = response) => {
  const roles = await Role.findAll()

  if (!roles) {
    const err = new Error('roles not found')
    return res.status(404).json({ msg: err.message })
  }

  res.status(200).json({
    ok: true,
    status: 201,
    body: roles
  })
}

const getRole = async(req = request, res = response) => {
  const id = req.params.id

  const role = await Role.findOne({
    where: { id }
  })

  if (!role) {
    const err = new Error('Role not found')
    return res.status(404).json({ msg: err.message })
  }

  res.status(200).json({
    ok: true,
    status: 201,
    body: role
  })
}

const postRole = async(req = request, res = response) => {
  const { name, email, password } = req.body

  const roleExists = await Role.findOne({
    where: { email }
  })
  if (roleExists) {
    const err = new Error('Role already registered')
    return res.status(404).json({ msg: err.message })
  }

  await Role.sync()
  const createRole = await Role.create({
    name,
    email,
    password
  })
  res.status(200).json({
    ok: true,
    status: 201,
    msg: 'Created Role',
    createRole
  })
}

const putRole = async(req = request, res = response) => {
  const id = req.params.id
  const role = await Role.findOne({
    where: { id }
  })

  if (!role) {
    const err = new Error('Role not found')
    return res.status(404).json({ msg: err.message })
  }

  const { name, email, password } = req.body

  const updateRole = await Role.update(
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
    msg: 'Updated Role',
    updateRole
  })
}

const deleteRole = async(req = request, res = response) => {
  const id = req.params.id
  const role = await Role.findOne({
    where: { id }
  })

  if (!role) {
    const err = new Error('Role not found')
    return res.status(404).json({ msg: err.message })
  }

  const deleteRole = await Role.destroy({
    where: {
      id
    }
  })
  res.status(200).json({
    ok: true,
    status: 204,
    msg: 'Delete Role',
    deleteRole
  })
}

module.exports = {
  getRoles,
  getRole,
  putRole,
  postRole,
  deleteRole
}
