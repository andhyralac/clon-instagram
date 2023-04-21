import { v2 as cloudinary } from 'cloudinary'
import { dotEnv } from './env.js'


cloudinary.config({ 
    cloud_name: dotEnv('CLOUDINARY_CLOUD_NAME'), 
    api_key: dotEnv('CLOUDINARY_API_KEY'), 
    api_secret: dotEnv('CLOUDINARY_API_SECRET'),
    secure: true
});

export {
    cloudinary
}
