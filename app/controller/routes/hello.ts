import { Router } from "express"
import * as controller from "../hello"

const router = Router()

router.get("/hello", controller.getHelloWorld)

export default router
