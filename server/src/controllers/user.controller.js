import { userService } from '../services/index.js'
import { httResponse, token } from '../helpers/index.js'

export const handlerCreateUser = async (req, res) => {
    try {
        const user = req.body
        const userCreated = await userService.createUser(user)

        if (!userCreated) {
            return httResponse.BadRequest(res, 'No se pude registrar al usuario')
        }

        const tokenCreated = token.tokenSign(userCreated)

        if (!tokenCreated) {
            return httResponse.BadRequest(res, 'No se pudo generar el token del usuario')
        }

        return httResponse.Create(res, {
            user: userCreated,
            token: tokenCreated
        })

    } catch (error) {
        return httResponse.Error(res, error)
    }
}