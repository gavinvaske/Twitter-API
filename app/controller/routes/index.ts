import { Router } from "express"

const router = Router()

/* base route */
router.get("/", (req, res) => {
  res.send("Welcome to the Twitter API")
})

export default router
