import prompts from 'prompts';
import { validateCategory } from '../validation';

const emptyValue = '___';

export const promptCategory = async (availableCategories, initial) => {
  const name = 'category';
  const result = await prompts([
    {
      type: 'autocomplete',
      name: name,
      message: 'Pick a category:',
      initial,
      choices: [{
        value: emptyValue,
        title: 'Other (Type a new category)',
      },...availableCategories.map((category) => ({
        value: category,
        title: category
      }))],
    },
    {
      type: prev => !prev || prev === emptyValue ? 'text' : null,
      name: name,
      message: 'Type category name:',
      validate: (val) =>  validateCategory(val) ?? true,
    },
  ]);
  return result[name];
}