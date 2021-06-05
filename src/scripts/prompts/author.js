import prompts from 'prompts';
import { validateAuthor } from '../validation';

const emptyValue = '___';

export const promptAuthor = async (availableAuthors, initial) => {
  const name = 'author';
  const result = await prompts([
    {
      type: 'autocomplete',
      name: name,
      initial,
      message: 'Pick an author:',
      choices: [{
        value: emptyValue,
        title: 'Other (Type a new author)',
      },...availableAuthors.map((author) => ({
        value: author,
        title: author
      }))],
    },
    {
      type: prev => !prev || prev === emptyValue ? 'text' : null,
      name: name,
      validate: (val) =>  validateAuthor(val) ?? true,
      message: 'Type author name:'
    },
  ])
  return result[name];
}