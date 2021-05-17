import fs from 'fs'
import path from 'path'
import dir from 'node-dir';
import matter from 'gray-matter'

import {PREFIX, PATH_DIVIDER, FILE_TYPE_REGEX, FILE_TYPE} from '../constants';


// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), PREFIX)

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = dir
  .files(POSTS_PATH, {sync: true})
  // Only include md(x) files
  .map(path => path.replace(`${POSTS_PATH}${PATH_DIVIDER}`, ''))
  .filter((path) => FILE_TYPE_REGEX.test(path))


export const loadPosts = () => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  });
  console.log(posts);
  return posts;
}

export const loadPost = (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug.join(PATH_DIVIDER)}${FILE_TYPE}`)
  const source = fs.readFileSync(postFilePath);
  return source;
}

export const getSlugsFromPosts = () => {
    const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(FILE_TYPE_REGEX, ''))
    .map(slug => (slug || '').split(PATH_DIVIDER))
    // Map the path into the static paths object required by Next.js
    return paths;
}