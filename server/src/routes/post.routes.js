import { Router } from 'express'
import { postController } from '../controllers/index.js'
import { authMiddleware } from '../middleware/index.js'



const router = Router()

router.post('/', authMiddleware.authCheck, postController.handlerCreatePost)












export default router