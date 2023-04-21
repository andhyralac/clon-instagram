import { UserModel } from '../models/user.model.js'



export const createUser = async ({ name, nickname, email, password, avatar = '' }) => {
    return await UserModel.create({
        name, nickname, email, password, avatar
    })
}



export const findOneUser = async (condition, projection = {}, options = {}) => {
    return await UserModel.findOne(condition, projection, options).exec()
}