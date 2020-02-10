import { Request, Response, NextFunction } from "express"

var request = require("request")

export const index = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!")
}

export const fbAuth = (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to FB Auth")
}
