import { Sequelize, Options } from "sequelize"
// return connection to database utilizing 'Sequelize' library
module.exports = new Sequelize(process.env.DATABASE_URL)

let sequelizeConfig: Options = {
  database: "test",
  username: "test",
  password: "12345",
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  define: {
    underscored: false, // convert camelCase column names to underscored.
    freezeTableName: true, // Disable pluralizing the table names created in the database.
    timestamps: true, // Adds createdAt and updatedAt timestamps to the model.
    paranoid: false, // when deleting rows, actually delete them. Do not set deleted_at timestamp for row instead.
  },
  logging: true,
}

export let sequelize: Sequelize | null

export const initDatabase = async (): Promise<void> => {
  if (sequelize) return

  sequelize = new Sequelize(sequelizeConfig)

  await sequelize.sync({
    force: true,
    alter: true,
  })

  await sequelize
    .authenticate()
    .then(() => {
      console.log("DB connection SUCCESSFUL.")
    })
    .catch((err: Error) => {
      console.error("DB connection FAILED.", err)
    })
}

export const resetDatabase = async (): Promise<void> => {
  await sequelize!.drop()
}

export const closeDatabase = async (): Promise<void> => {
  await sequelize!.close()
  sequelize = null
}
