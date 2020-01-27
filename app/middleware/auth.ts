import passport from "passport"
import { Strategy as BearerStrategy } from "passport-http-bearer"
import * as authService from "../helpers/auth"
const UserModel = require("../models/user")
import { Model } from "sequelize"

/* Checks if auth token maps to a user */
passport.use(
  "user_token_authenticator",
  new BearerStrategy(function(token, done) {
    UserModel.findOne({
      where: {
        token: token,
      },
    })
      .then((user: Model) => {
        if (!user) {
          return done(null, false)
        }
        return done(null, user, { message: "test", scope: "all" })
      })
      .catch((err: Error) => {
        return done(err)
      })
  })
)
