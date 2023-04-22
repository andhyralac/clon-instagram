import { PostModel } from '../models/post.model.js'
import { cloudinaryService } from './index.js'


export const createPost = async ({ image, text, userId }) => {
    const pathImage = await cloudinaryService.uploadFileCloudinary(image)

    if (!pathImage) {
        return null
    }

    return await PostModel.create({
        image: pathImage.url,
        text: text,
        user: userId,
    })
}



export const addLikePost = async (postId, userId) => {
    const post = await PostModel.findOne({ _id: postId, likes: userId })

    if (!post) {
        return await PostModel.findByIdAndUpdate(
            postId, 
            { $addToSet: { likes: userId } },
            { upsert: true, new: true } )

    } else {
        return null
    }
}