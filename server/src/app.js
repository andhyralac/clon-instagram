import express from 'express'
import morgan from 'morgan'
import helment from 'helmet'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import { dotEnv } from './config/env.js'
import routes from './routes/index.js'
import connectDB from './config/mongoConnect.js'

// app
const app = express()
app.set('port', dotEnv('PORT') || 3001)

// setting
app.use(cors())
app.use(helment())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}

// loading file
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true
}))

// setting routes
app.use('/api/v1', routes)

// setting DB
connectDB()

export default app