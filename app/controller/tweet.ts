import { Request, Response, NextFunction } from "express"

export const saveTweet = (req: Request, res: Response, next: NextFunction) => {
  let tweet = req.query.tweet
  let response = { tweet: String(tweet) }
  res.send(response)
}
