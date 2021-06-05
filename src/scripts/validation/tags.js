export const validateTags = (tags) => {
  if(!tags){
    return `Missing tags.`
  } else if(!Array.isArray(tags)){
    return `tags should be an array.`;
  } else if((tags || [])?.length > 10){
    return 'tags should not be longer than 10';
  } else if ((tags || []).some(tag => typeof tag !== 'string')){
    return `tags should be containing strings ([${tags.join(', ')}]).`;
  } else if ((tags || []).some(tag => tag.length > 32)){
    return `tags shold not contain any tag longer than 32 chars.`;
  }
}