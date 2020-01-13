import { Request, Response, NextFunction } from "express"

export const saveTweet = (req: Request, res: Response, next: NextFunction) => {
  let tweet = req.query.tweet
  let response = { tweet: String(tweet) }
  res.send(response)
}

export const getTweet = (req: Request, res: Response, next: NextFunction) => {
  let id = req.query.id
  let response = { tweet: String("Tweet ID = " + id) }
  res.send(response)
}
