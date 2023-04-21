import jwt from 'jsonwebtoken'
import { dotEnv } from '../config/env.js'




export const tokenSign = ({ _id, email }) => {
    const payload = {
        userId: _id,
        email: email
    }

    return jwt.sign(payload, dotEnv('JWT_SECRET'), {
        expiresIn: '6h'
    })
}



export const verifyToken = (token) => {
    try{
        return jwt.verify(token, dotEnv('JWT_SECRET'))
    } catch(error) {
        return null
    }
}



export const decodeSign = (token) => {
    return jwt.decode(token, null)
}