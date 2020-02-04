import { Request, Response, NextFunction } from "express"
import { Model } from "sequelize/types"
import { resolveSoa } from "dns"
var request = require("request")

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
export const index = (req: Request, res: Response, next: NextFunction) => {
  let response = "Welcome to the \\users endpoint!"
  res.send(response)
}

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

  const data = {
    members: [
      {
        email_address: "gvwarrior@gmail.com",
        status: "pending",
      },
    ],
  }
  const dataStringified = JSON.stringify(data)

  const options = {
    url:
      "https://us4.api.mailchimp.com/3.0/lists/" +
      process.env.MAILCHIMP_LIST_ID,
    method: "POST",
    headers: {
      Authorization: "auth " + process.env.MAILCHIMP_API_KEY,
    },
    body: dataStringified,
  }

  console.log(options)

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
          request(options, (err: any, response: any, body: any) => {
            if (err) {
              res.send(
                "User created successfully... But error occurred while sending email"
              )
            } else {
              res.send(
                "User created successfully... Success sending email using mailchimp!"
              )
            }
          })
        })
        .catch((error: Error) => {
          res.send("An error occurred while creating your account: " + error)
        })
    }
  })
}
