const { Router } = require('express')

const {
  getUsers,
  getUser,
  putUser,
  postUsers,
  deleteUsers
} = require('../controllers/user.controller')

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', postUsers)

router.put('/:id', putUser)

router.delete('/', deleteUsers)

module.exports = router
