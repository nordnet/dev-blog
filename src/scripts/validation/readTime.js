export const validateReadTime = (readTime) => {
  if(!readTime){
    return 'Missing readTime.';
  } else if (typeof readTime !== 'number'){
    return 'readTime should be a number.';
  } else if (readTime < 0){
    return 'readTime should be a positive number.';
  } else if(readTime > 60){
    return 'readTime should be less than 60 minutes.';
  }
}