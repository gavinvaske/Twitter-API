const db = require("../config/database")
const { DataTypes } = require("sequelize")

module.exports = db.define(
  "authToken",
  {
    /* attributes */
    token: {
      type: DataTypes.STRING,
    },
  },
  {
    /* options */
  }
)
