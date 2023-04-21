import { cloudinary } from '../config/cloudinary.js'

export const uploadFileCloudinary = async (file) => {
    const { tempFilePath } = file
    return await cloudinary.uploader.upload( tempFilePath );
}