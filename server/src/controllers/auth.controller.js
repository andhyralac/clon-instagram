import { authService } from '../services/index.js'
import { httResponse } from '../helpers/index.js'


export const handlerAuth = async (req, res) => {
    try {
        const { email, password } = req.body
        const token = await authService.auth(email, password)

        if (!token) {
            return httResponse.BadRequest(res, 'contraseña y/o correo mal ingresados')
        }

        return httResponse.Ok(res, {
            token
        })

    } catch(error) {
        return httResponse.Error(res, error)
    }
}