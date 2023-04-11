const { Router } = require('express')
const {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers
} = require('../controllers/user.controller')

const router = Router()

router.get('/', getUsers)

router.put('/', putUsers)

router.post('/', postUsers)

router.delete('/', deleteUsers)

module.exports = router
