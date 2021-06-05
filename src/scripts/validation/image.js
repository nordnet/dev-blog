import path from 'path';
import fs from 'fs';
import {IMAGES_PATH} from '../../utils/server/images';

const allowedImageTypes = ['.jpg', '.jpeg', '.png', '.svg', '.fig', '.ico', '.webp', '.jp2', '.avif'];

export const validateImage = (image) => {
  if(!image){
    return `Missing image.`
  } else if(typeof image !== 'string'){
    return `image should be a string.`
  } else if(!allowedImageTypes.includes(path.extname(image))){
    return `image should be one of the types [${allowedImageTypes.join(', ')}] (${image}).`
  } else if(!fs.existsSync(path.join(IMAGES_PATH, image))){
    return `image does not exist (${path.join(IMAGES_PATH, image)}).`
  }
}
