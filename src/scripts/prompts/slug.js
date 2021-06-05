import prompts from 'prompts';
import { validateSlug, urlify } from '../validation';

export const promptSlug = async (initial) => {
  const {slug} = await prompts([
    {
      name: 'slug',
      initial: urlify(initial),
      message: 'Slug (url path):',
      type: 'text',
      validate: (val) =>  validateSlug(val) ?? true,
    },
  ]);
  return slug;
}