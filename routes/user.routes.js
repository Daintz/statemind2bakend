const { Router } = require('express')

const {
  getUsers,
  getUser,
  putUsers,
  postUsers,
  deleteUsers
} = require('../controllers/user.controller')

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', postUsers)

router.put('/:id', putUsers)

router.delete('/', deleteUsers)

module.exports = router
