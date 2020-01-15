const db = require("../config/database")
const Sequelize = require("sequelize")

module.exports = db.define(
  "tweet",
  {
    /* attributes */
    message: {
      type: Sequelize.STRING,
    },
  },
  {
    /* options */
  }
)
