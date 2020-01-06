import express from "express"
import { AddressInfo, createConnection } from "net"
import controllers from "./controller"
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize"

const db = require("./config/database")
const app = express()

app.set("port", process.env.PORT || 5000)
app.use(controllers)

// const sequelize = new Sequelize(process.env.DATABASE_URL);

/* Test database connection */
db.authenticate()
  .then(() => {
    console.log("DB connection SUCCESSFUL.")
  })
  .catch((err: Error) => {
    console.error("DB connection FAILED.", err)
  })

const server = app.listen(app.get("port"), () => {
  console.log(
    "info",
    `Server started. Listening at: ${(<AddressInfo>server.address()).address}:${
      (<AddressInfo>server.address()).port
    }`
  )
})

/* 
  base route
*/
app.get("/", (req, res) => {
  res.send("Welcome to the Twitter API")
})
