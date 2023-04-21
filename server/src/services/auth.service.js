import { userService } from './index.js'
import { handleToken, handlePassword } from '../helpers/index.js'


export const auth = async (email, passwordText) => {
    const user = await userService.findOneUser({ email })
    const isPasswordMatch = handlePassword.compare(passwordText, user.password)

    if (!isPasswordMatch) {
        return null
    }

    return handleToken.tokenSign(user)
}



