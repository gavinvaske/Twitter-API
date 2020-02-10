import { Router } from "express"
import tweetRouter from "./routes/tweets"
import userRouter from "./routes/users"
import indexRouter from "./routes/index"
import authRouter from "./routes/auth"

const router = Router()

// base endpoints
router.use("/", indexRouter)
router.use("/tweets", tweetRouter)
router.use("/users", userRouter)
router.use("/auth", authRouter)

export default router
