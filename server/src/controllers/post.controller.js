import { request, response } from 'express'
import { postService } from '../services/index.js'
import { httResponse } from '../helpers/index.js'

export const handlerCreatePost = async (req = request, res = response) => {
    try {
        const { text } = req.body
        const { image } = req.files
        const { userId } = req.user

        const postCreated = await postService.createPost({image, text, userId})

        if (!postCreated) {
            return httResponse.BadRequest(res, 'No se pudo realizar la publicación')
        }

        return httResponse.Create(res, {
            post: postCreated
        })

    } catch (error) {
        return httResponse.Error(res, error.message)
    }
}