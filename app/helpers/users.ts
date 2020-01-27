import { Model } from "sequelize"
const UserModel = require("../models/user")

export const getUsers = async function(count: number) {
  UserModel.findAll({
    limit: count,
  }).then((users: [Model]) => {
    return users
  })
}
