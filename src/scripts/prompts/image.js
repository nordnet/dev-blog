import prompts from 'prompts';
import {IMAGES_PATH, imagesFilePaths} from '../../utils/server/images';
import { validateImage } from '../validation';

const emptyValue = '___';

export const promptImage = async (initial) => {
  const {image} = await prompts([
    {
      type: 'autocomplete',
      name: 'image',
      initial,
      message: `Pick an image (${IMAGES_PATH}):`,
      validate: (val) =>  validateImage(val) ?? true,
      choices: [{
        value: emptyValue,
        title: 'None',
      }, ...imagesFilePaths.map(image => ({
        value: `/${image}`,
        title: image,
      }))]
    }
  ]);
  return image === emptyValue ? null : image;
}