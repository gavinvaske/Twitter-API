import { Router } from "express"
import * as controller from "../tweets"
import passport from "passport"
import { Strategy as BearerStrategy } from "passport-http-bearer"

const router = Router()

// /* Helpful URL = https://github.com/foundersclubsoftware/DevClass-API/blob/master/app/middleware/auth.ts */
// passport.use('user_token_bearer', new BearerStrategy((token, done) => {
//     console.log('testies - testies')
//     return done(null, false)
//   }
// ));

/**
 * @api {get} /tweet Save a tweet
 * @apiName SaveTweet
 * @apiGroup Tweet
 *
 * @apiParam {Number} id Users unique ID.
 *
 */
router.post(
  "/save/:userId",
  passport.authenticate("user_token_authenticator", { session: false }),
  controller.saveTweet
)

router.get("/", (req, res) => {
  res.send("Welcome to the TWEETS endpoint")
})
router.get("/:id", controller.getTweet)

export default router
