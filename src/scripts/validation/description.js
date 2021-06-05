export const validateDescription = (description) => {
  if(!description){
    return `Missing description.`;
  } else if(typeof description !== 'string'){
    return `description should be a string.`;
  } else if((description || '')?.length > 200){
    return 'description should not be longer than 200 chars.';
  }
}