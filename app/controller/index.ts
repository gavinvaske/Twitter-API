import { Router } from "express"
import helloRouter from "./routes/hello"
import tweetRouter from "./routes/tweet"

const router = Router()

// route handlers
router.use(helloRouter)
router.use(tweetRouter)

export default router
