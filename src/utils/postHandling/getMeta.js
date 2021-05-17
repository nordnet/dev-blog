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