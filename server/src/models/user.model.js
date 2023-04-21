import { Schema, model } from 'mongoose'
import { handlePassword } from '../helpers/index.js'


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true,
    versionKey: false
})


UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        try {
            this.password = handlePassword.encrypt(this.password)
        } catch (error) {
            return next(error)
        }
    }
    next()
})


UserSchema.methods.toJSON = function () {
    const { _id, password, status, createdAt, updatedAt, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

export const UserModel = model('User', UserSchema)