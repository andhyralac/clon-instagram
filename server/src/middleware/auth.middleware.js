import { request, response } from 'express'
import { httResponse, handleToken } from '../helpers/index.js'

export const authCheck = (req = request, res = response, next) => {
    try {
        const tokenPeticion = req.headers?.authorization?.split(' ').pop()

        if (!tokenPeticion) {
            return httResponse.Unauthorized(res, 'Token no viene en la petición')
        }

        const tokenData = handleToken.verifyToken(tokenPeticion)

        if (!tokenData) {
            return httResponse.Unauthorized(res, 'Token no valido')
        }

        req.user = tokenData
        next()

    } catch (error) {
        return httResponse.Error(res, error)
    }
}