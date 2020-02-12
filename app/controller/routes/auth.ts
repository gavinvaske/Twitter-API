import { Router } from "express"
import * as controller from "../auth"
const passport = require("passport")

const router = Router()

router.get("/", controller.index)
router.get("/fb", passport.authenticate("facebook", { scope: "email" }))
router.get(
  "/fb/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/login",
  }),
  function(req, res) {
    res.redirect("/")
  }
)

export default router
