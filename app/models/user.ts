const { Sequelize, DataTypes, Model } = require("sequelize")
const db = require("../config/database")

module.exports = db.define(
  "user",
  {
    /* attributes */
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [0, 100],
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    token: {
      type: DataTypes.STRING,
    },
  },
  {
    /* options */
  }
)
