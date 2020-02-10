import { Router } from "express"
import * as controller from "../auth"

const router = Router()

router.get("/", controller.index)
router.get("/fb", controller.fbAuth)

export default router
