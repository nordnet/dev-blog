import prompts from 'prompts';
import {parse, lightFormat, isValid} from 'date-fns';
import { validateDate } from '../validation';

export const promptDate = async (initial = new Date()) => {
  const initalDate = parse(initial, 'yyyy-MM-dd', new Date());
  const {date} = await prompts([{
    type: 'date',
    name: 'date',
    message: 'Pick a publish date:',
    mask: 'YYYY-MM-DD',
    initial: isValid(initalDate) ? initalDate : new Date(),
    validate: (val) =>  validateDate(lightFormat(val, 'yyyy-MM-dd')) ?? true,
  }])
  return lightFormat(date, 'yyyy-MM-dd');
}