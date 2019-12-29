import {Router} from 'express'
import * as controller from '../hello'

const router = Router()

router.get('/hello', controller.hello)

export default router