export const validateTitle = (title) => {
  if(!title){
    return `Missing title.`;
  } else if(typeof title !== 'string'){
    return `title should be a string.`;
  } else if((title || '')?.length > 60){
    return 'title should not be longer than 60 chars.';
  }
}