import express from "express"
import { AddressInfo, createConnection } from "net"
import controllers from "./controller"
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize"

/* root application controller */
const app = express()
/* import models */
const TweetModel = require("./models/tweet")
/* import controllers */
app.use(controllers)
/* get connection to database */
const db = require("./config/database")
/* define port for server to listen on */
app.set("port", process.env.PORT || 5000)

/* start server on specified port */
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

/* synchronizes all 'sequelize' models database and optionally resets database */
async function initDatabase(shouldResetDb: Boolean) {
  await db
    .sync({ force: shouldResetDb })
    .then(() => {
      console.log("Synchronized database")
    })
    .catch((err: Error) => {
      console.log("[ERROR][initDatabase()] -> ", err)
    })
}

/* verifies database connection is active */
async function testDatabaseConnection() {
  try {
    await db.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}

/* main server function */
;(async () => {
  await db.sync({ force: true })
  runServer()

  /* create and save a tweet to database (used for testing) */
  await TweetModel.create({ message: "this is a new world wide test!!" })
    .then(() => {
      console.log("after created and saved new model")
    })
    .catch((error: Error) => {
      console.log(error)
    })

  /* fetch 20 tweets */
  TweetModel.findAll({
    limit: 20,
  }).then((tweets: [Model]) => {
    console.log(JSON.stringify(tweets))
  })
})()
