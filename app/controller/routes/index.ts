import { Router } from "express"
import passport from "passport"

const router = Router()

/* base route [!Protected]
 * Example Usage:
 *  - http://localhost:5000/?access_token=123456789
 *  - curl -v -H "Authorization: Bearer 123456789" http://127.0.0.1:5000/
 */
router.get(
  "/",
  passport.authenticate("user_token_authenticator", { session: false }),
  function(req, res) {
    res.json(req.user)
  }
)

export default router
