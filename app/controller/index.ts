import { Router } from "express"
import tweetRouter from "./routes/tweets"
import userRouter from "./routes/users"
import indexRouter from "./routes/index"

const router = Router()

// base endpoints
router.use("/", indexRouter)
router.use("/tweets", tweetRouter)
router.use("/users", userRouter)

export default router
