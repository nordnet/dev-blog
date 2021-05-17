
export const filterPostsOnAuthor = (posts = [], author = "") => {
  if(!author){
    return posts;
  }
  return posts.filter(post => post?.data?.author?.toLowerCase() === author?.toLowerCase());
}

export const filterPostsOnCategory = (posts = [], category = "") => {
  if(!category){
    return posts;
  }
  return posts.filter(post => post?.data?.category?.toLowerCase() === category?.toLowerCase());
}

export const filterPostsOnTag = (posts = [], tag = "") => {
  if(!tag){
    return posts;
  }
  return posts.filter(post => post?.data?.tags?.map(tag => tag?.toLowerCase()).includes(tag?.toLowerCase()));
}

export const filterPostsOnPages = (posts, limit = 10, offset = 0) => {
  return posts.slice(offset, offset + limit);
}