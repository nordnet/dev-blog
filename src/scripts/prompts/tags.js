import prompts from 'prompts';
import chalk from 'chalk';
import { validateTags } from '../validation';

const emptyValue = '___';
const separator = ',';

export const promptTags = async (availableTags, initial = []) => {
  const {tags, extraTags = []} = await prompts([
    {
      type: 'autocompleteMultiselect',
      name: 'tags',
      initial,
      message: 'Pick tags:',
      min: 1,
      max: 10,
      choices: [{
        value: emptyValue,
        title: 'Other (Type a new tags)',
      },...availableTags.map((tag) => ({
        selected: initial.includes(tag),
        value: tag,
        title: tag
      }))],
    },
    {
      type: prev => !prev || prev.includes(emptyValue) ? 'list' : null,
      name: 'extraTags',
      separator,
      message: 'Type additional tags as a comma separated list:',
      validate: (tags) => validateTags(tags.split(separator)) ?? true,
    },
  ]);
  const result = [...tags.filter(tag => tag !== emptyValue), ...extraTags];
  if(validateTags(result)){
    console.log(chalk.red(validateTags(result)));
    return await promptTags(availableTags, initial);
  }
  return result;
}