import { Request, Response, NextFunction } from "express"

export const getLoginForm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let response = "TODO " + __filename + " getLoginForm()"
  res.send(response)
}
export const getSignupForm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let response = "TODO " + __filename + " getSignupForm()"
  res.send(response)
}
export const login = (req: Request, res: Response, next: NextFunction) => {
  let response = "TODO " + __filename + " login()"
  res.send(response)
}
export const signup = (req: Request, res: Response, next: NextFunction) => {
  let response = "TODO " + __filename + " signup()"
  res.send(response)
}
