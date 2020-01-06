import { Sequelize } from "sequelize"
// return connection to database utilizing 'Sequelize' library
module.exports = new Sequelize(process.env.DATABASE_URL)
