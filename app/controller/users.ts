import { Request, Response, NextFunction } from "express"
import { Model } from "sequelize/types"
import { resolveSoa } from "dns"

/* user model */
const User = require("../models/user")

/* Crud function (Create, Read, Update, Delete)
 * new
 * show
 * index
 * create
 * destroy
 * Maybe (update/edit)
 */

export const getLoginForm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let response = "TODO: Create Login Form"
  res.send(response)
}

export const getSignupForm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let response = "TODO: Create Sign-up Form"
  res.send(response)
}

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.query

  User.findOne({
    where: {
      email: email,
    },
  }).then((user: Model) => {
    /* if user already exists */
    if (user) {
      if (user.getDataValue(password) == password) {
        res.send("Login was successful...")
      } else {
        res.send("Invalid password...")
      }

      /* if user does not exists */
    } else {
      res.send("Invalid email...")
    }
  })
}

export const signup = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.query

  User.findOne({
    where: {
      email: email,
    },
  }).then((user: Model) => {
    /* if user already exists */
    if (user) {
      res.send("Account already exists with that email - please login instead.")
      /* if user does not exists */
    } else {
      User.create({
        name: name,
        email: email,
        password: password,
      })
        .then(() => {
          res.send("User created successfully")
        })
        .catch((error: Error) => {
          res.send("An error occurred while creating your account: " + error)
        })
    }
  })
}
