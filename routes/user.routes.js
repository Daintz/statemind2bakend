const { Router, request, response } = require('express')

const router = Router()

router.get('/', function (req = request, res = response) {
  res.status(201).json({
    msg: 'method GET'
  })
})

router.put('/', function (req = request, res = response) {
  res.status(201).json({
    msg: 'method PUT'
  })
})

router.post('/', function (req = request, res = response) {
  res.status(201).json({
    msg: 'method POST'
  })
})

router.delete('/', function (req = request, res = response) {
  res.status(201).json({
    msg: 'method DELETE'
  })
})

module.exports = router
