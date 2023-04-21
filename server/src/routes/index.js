import { Router } from 'express'
import authRoutes from './auth.routes.js'
import userRoutes from './user.routes.js'
import postRoutes from './post.routes.js'

const routes = Router()
routes.use('/auth', authRoutes)
routes.use('/users', userRoutes)
routes.use('/posts', postRoutes)

export default routes
