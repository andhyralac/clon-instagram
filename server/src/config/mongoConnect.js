import { connect } from 'mongoose'
import { dotEnv } from './env.js'



const connectDB = async () => {
    try {
        await connect(dotEnv('MONGO_URI'))
        console.log('Database connected')
    } catch (err) {
        console.error(`Error in connect database: ${err.message}`)
    }
}


export default connectDB