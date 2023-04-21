import { Schema, model, Types } from 'mongoose'

const CommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    post: {
        type: Types.ObjectId,
        ref: 'Post'
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
})

CommentSchema.methods.toJSON = function () {
    const { _id, status, ...comment } = this.toObject();
    comment.uid = _id;
    return comment;
}

export const CommentModel = model('Comment', CommentSchema)