import { Request, Response, NextFunction } from "express"

export const getHelloWorld = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let name = req.query.name
  let response = { message: "hello, world" }
  if (name.length != undefined) {
    response = {
      message: "hello, " + String(name),
    }
  }

  console.log("The first param 4= " + JSON.stringify(req.query))
  res.send(response)
}
