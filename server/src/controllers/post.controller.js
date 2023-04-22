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




export const handlerAddLikePost = async (req = request, res = response) => {
    try {
        const { postId } = req.body
        const { userId } = req.user

        const post = await postService.addLikePost(postId, userId)
        if (!post) {
            return httResponse.BadRequest(res, 'No se puede agregar LIKE en la publicación - usuario ya le dio LIKE')
        }

        return httResponse.Ok(res, 'Se agrego LIKE en la publicacion')

    } catch (error) {
        return httResponse.Error(res, error)
    }
}



