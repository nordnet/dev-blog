export const validateAuthor = (author) => {
  if(!author){
    return `Missing author.`;
  } else if(typeof author !== 'string'){
    return `author should be a string.`;
  } else if((author || '')?.length > 32){
    return 'author should not be longer than 32 chars.';
  }
}