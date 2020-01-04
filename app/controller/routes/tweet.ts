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
router.get("/tweet/:userId", controller.saveTweet)

export default router
