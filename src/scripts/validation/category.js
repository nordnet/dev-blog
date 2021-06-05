export const validateCategory = (category) => {
  if(!category){
    return `Missing category.`;
  } else if(typeof category !== 'string'){
    return `category should be a string.`;
  } else if((category || '')?.length > 32){
    return 'category should not be longer than 32 chars.';
  }
}