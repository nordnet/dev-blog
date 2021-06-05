import { isValid, isMatch, parse, getYear } from 'date-fns'

export const validateDate = (date) => {
  try {
    if(!date){
      return `Missing date.`;
    } else if(typeof date !== 'string'){
      return `date should be a string (remember to use "" around it).`;
    } else if(!isMatch(date, 'yyyy-MM-dd')){
      return `date should be valid in the format yyyy-MM-dd (${date})`;
    } else if(!isValid(parse(date, 'yyyy-MM-dd', new Date()))){
      return `date must be valid (${date}).`;
    }
  } catch(err){
    return err.message;
  }
}