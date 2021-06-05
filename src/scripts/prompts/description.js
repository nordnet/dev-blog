import prompts from 'prompts';
import { validateDescription } from '../validation';

export const promptDescription = async (initial) => {
  const {description} = await prompts([
    {
      name: 'description',
      initial,
      message: 'Description:',
      type: 'text',
      validate: (val) =>  validateDescription(val) ?? true,
    }
  ])
  return description;
}