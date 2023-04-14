const { Router } = require('express')

const {
  getRoles,
  getRole,
  putRole,
  postRole,
  deleteRole
} = require('../controllers/role.controller')

const router = Router()

router.get('/', getRoles)

router.get('/:id', getRole)

router.post('/', putRole)

router.put('/:id', postRole)

router.delete('/:id', deleteRole)

module.exports = router
