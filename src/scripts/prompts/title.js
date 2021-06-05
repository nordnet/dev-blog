import prompts from 'prompts';
import { validateTitle } from '../validation';

export const promptTitle = async (initial) => {
  const {title} = await prompts([
    {
      name: 'title',
      initial,
      message: 'Title:',
      type: 'text',
      validate: (title) => validateTitle(title) ?? true,
    },
  ]);
  return title;
}