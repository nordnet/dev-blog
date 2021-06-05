import prompts from 'prompts';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import matter from 'gray-matter';
import mkdirp from 'mkdirp';
import { loadPosts, POSTS_PATH} from '../utils/server/loadPosts';
import {FILE_TYPE} from '../utils/constants';
import { getAllAuthors, getAllCategories, getAllTags } from '../utils/postHandling/getMeta';
import {promptAuthor, promptCategory, promptImage, promptDate, promptDescription, promptTags, promptTitle, promptSlug} from './prompts';

const getMetaOptions = () => {
  const posts = loadPosts();
  const authors = getAllAuthors(posts);
  const tags = getAllTags(posts);
  const categories = getAllCategories(posts);
  return {
    authors,
    tags,
    categories,
  }
}

(async() => {
  const {
    authors: availableAuthors,
    tags: availableTags,
    categories: availableCategories,
  } = getMetaOptions();
  const title = await promptTitle();
  const description = await promptDescription();
  const author = await promptAuthor(availableAuthors);
  const date = await promptDate(new Date());
  const category = await promptCategory(availableCategories);
  const tags = await promptTags(availableTags);
  const image = await promptImage();
  const slug = await promptSlug(title);


  const fileContent = matter.stringify(description, {
    title,
    description,
    author,
    date,
    category,
    tags,
    image,
  });
  const filePath = path.join(POSTS_PATH, `${slug}${FILE_TYPE}`);
  mkdirp.sync(path.dirname(filePath));
  fs.writeFileSync(filePath, fileContent);

  
})()