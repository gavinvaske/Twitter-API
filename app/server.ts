import express from "express"
import { AddressInfo, createConnection } from "net"
import controllers from "./controller"
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize"

const db = require("./config/database")
const app = express()

// data models
// const user = require('./models/User')

app.set("port", process.env.PORT || 5000)
app.use(controllers)

function runServer() {
  const server = app.listen(app.get("port"), () => {
    console.log(
      "info",
      `Server started. Listening at: ${
        (<AddressInfo>server.address()).address
      }:${(<AddressInfo>server.address()).port}`
    )
  })
}

async function initDatabase() {
  await db
    .sync({})
    .then(() => {
      console.log("Synchronized database")
    })
    .catch((err: Error) => {
      console.log("[ERROR][initDatabase()] -> ", err)
    })
}

function testDatabaseConnection() {
  db.authenticate()
    .then(() => {
      console.log("DB connection SUCCESSFUL.")
    })
    .catch((err: Error) => {
      console.error("[ERROR][testDatabaseConnection()] -> ", err)
    })
}

initDatabase()
runServer()

// /* Test database connection */
// db.authenticate()
//   .then(() => {
//     console.log("DB connection SUCCESSFUL.")
//   })
//   .catch((err: Error) => {
//     console.error("DB connection FAILED.", err)
//   })

//// TESTING START -> 1/15/2019 ////

const tweet = require("./models/tweet")
// tweet.findAll().then(() => {
//   console.log("After test.findAll()")
// })
tweet
  .create({
    message: "holly shit! This is sick",
  })
  .then(() => {
    console.log("test model SUCCEEDED")
  })
  .catch(() => {
    console.log("test model FAILED")
  })

////////////////////////////////////
