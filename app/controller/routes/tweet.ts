import { Router } from "express"
import * as controller from "../tweet"

const router = Router()

/**
 * @api {get} /tweet Save a tweet
 * @apiName SaveTweet
 * @apiGroup Tweet
 *
 * @apiParam {Number} id Users unique ID.
 *
 */
router.post("/save/:userId", controller.saveTweet)

router.get("/", (req, res) => {
  res.send("Welcome to the TWEETS endpoint")
})
router.get("/:id", controller.getTweet)

export default router
