import { userService } from './index.js'
import { token, password } from '../helpers/index.js'


export const auth = async (email, passwordText) => {
    const user = await userService.findOneUser({ email })
    const isPasswordMatch = password.compare(passwordText, user.password)

    if (!isPasswordMatch) {
        return null
    }

    return token.tokenSign(user)
}



