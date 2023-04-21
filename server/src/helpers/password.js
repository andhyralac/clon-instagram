import bcryptjs from 'bcryptjs'


export const encrypt = (passwordText) => {
    const salt = bcryptjs.genSaltSync(10)
    return bcryptjs.hashSync(passwordText, salt)
}



export const compare = (passwordText, passwordHash) => {
    return bcryptjs.compareSync(passwordText, passwordHash)
}
