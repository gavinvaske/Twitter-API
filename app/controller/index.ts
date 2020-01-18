import { Router } from "express"
import helloRouter from "./routes/hello"
import tweetRouter from "./routes/tweet"
import sessionRouter from "./routes/session"

const router = Router()

// route handlers
router.use(helloRouter)
router.use(tweetRouter)
router.use(sessionRouter)

/* base route */
router.get("/", (req, res) => {
  res.send("Welcome to the Twitter API")
})

export default router
