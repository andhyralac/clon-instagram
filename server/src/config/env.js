import { config } from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
    config({
        path: `.env.${process.env.NODE_ENV}`
    })
} else {
    config()
}



export const dotEnv = (key, value = '') => {
    if (value.length < 1) {
        return process.env[key]
    } 
    return value
}