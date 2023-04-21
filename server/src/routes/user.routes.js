import { Router } from 'express'
import { userController } from '../controllers/index.js'



const router = Router()

router.post('/', userController.handlerCreateUser)



export default router