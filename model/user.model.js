const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db/db')
const Role = require('./role.model')

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: true
    }
  },
  {
    hooks: {
      async beforeCreate(user) {
        if (!user.RoleId) {
          const defaultRole = await Role.findOne({ where: { name: 'User' } })
          if (defaultRole) {
            user.RoleId = defaultRole.id
          } else {
            const newUserRole = await Role.create({ name: 'User' })
            user.RoleId = newUserRole.id
          }
        }
      }
    },
    sequelize,
    modelName: 'User'
  }
)

User.belongsTo(Role)
Role.hasMany(User)

module.exports = User
