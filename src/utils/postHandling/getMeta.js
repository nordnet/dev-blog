export const getAllAuthors = (posts = []) => {
  const authors = posts.map(post => post?.data?.author).filter(Boolean);
  return [...new Map(authors.map(s => [s.toLowerCase(), s])).values()];
}

export const getAllCategories = (posts = []) => {
  const categories = posts.map(post => post?.data?.category).filter(Boolean);
  return [...new Map(categories.map(s => [s.toLowerCase(), s])).values()];
}

export const getAllTags = (posts = []) => {
  const tags = posts.flatMap(post => post?.data?.tags).filter(Boolean);
  return [...new Map(tags.map(s => [s.toLowerCase(), s])).values()];
}

export const getFirstPostForEachAuthor = (posts = []) => {
  return [...posts.reduce((map, post) => {
    if(!map.has(post?.data?.author)){
      map.set(post?.data?.author, post);
    }
    return map;
  }, new Map()).values()];
}

export const getFirstPostForEachCategory = (posts = []) => {
  return [...posts.reduce((map, post) => {
    if(!map.has(post?.data?.category)){
      map.set(post?.data?.category, post);
    }
    return map;
  }, new Map()).values()];
}