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
router.post("/tweet/:userId", controller.saveTweet)
router.get("/tweet/:id", controller.getTweet)

export default router
