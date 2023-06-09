const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.userPath = '/api/users'
    this.rolePath = '/api/roles'

    this.middlewares()

    this.routes()
  }

  middlewares() {
    this.app.use(cors())

    this.app.use(express.json())

    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.userPath, require('../routes/user.routes'))
    this.app.use(this.rolePath, require('../routes/role.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Online server in port ${this.port}`)
    })
  }
}

module.exports = Server
