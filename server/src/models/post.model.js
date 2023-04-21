import { Schema, model, Types } from 'mongoose'

const PostSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        comment: {
            type: Types.ObjectId,
            ref: 'Comment'
        },
        author: {
            type: Types.ObjectId,
            ref: 'User'
        } 
    }],
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
})


PostSchema.methods.toJSON = function () {
    const { _id, status, ...post } = this.toObject();
    post.uid = _id;
    return post;
}


export const PostModel = model('Post', PostSchema)