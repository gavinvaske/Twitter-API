import {Router} from 'express'
import helloRouter from './routes/hello'

const router = Router()

router.use(helloRouter)

export default router