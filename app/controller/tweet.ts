import { Request, Response, NextFunction } from "express"

/* Crud function (Create, Read, Update, Delete)
 * new
 * show
 * index
 * create
 * destroy
 * Maybe (update/edit)
 */

export const saveTweet = (req: Request, res: Response, next: NextFunction) => {
  let userId = req.params.userId
  let tweet = req.query.tweet

  let response = {
    userId: String(userId),
    tweet: String(tweet),
  }
  res.send(response)
}

export const getTweet = (req: Request, res: Response, next: NextFunction) => {
  let id = req.query.id
  let response = { tweet: String("Tweet ID = " + id) }
  res.send(response)
}
