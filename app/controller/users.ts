import { Request, Response, NextFunction } from "express"
import { Model } from "sequelize/types"

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
  let response = "Received Login POST request"
  console.log("Login req.params = " + JSON.stringify(req.params))
  console.log("Login req.query = " + JSON.stringify(req.query))
  res.send(response)
}
export const signup = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.query

  User.findOne({ email: email }).then((user: Model) => {
    if (user) {
      res.send("You already have an account - please login instead")
    }
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
  })
}
