import { Router } from 'express'
import { postController } from '../controllers/index.js'
import { authMiddleware } from '../middleware/index.js'



const router = Router()

router.post('/', authMiddleware.authCheck, postController.handlerCreatePost)




router.post('/likes', authMiddleware.authCheck, postController.handlerAddLikePost)




router.get('/', authMiddleware.authCheck, postController.handlerGetAllPosts)





router.delete('/:postId', authMiddleware.authCheck, postController.handlerDeletePost)





export default router