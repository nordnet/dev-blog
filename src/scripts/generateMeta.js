import prompts from 'prompts';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import matter from 'gray-matter';
import { loadPosts, postFilePaths, POSTS_PATH} from '../utils/server/loadPosts';
import { getAllAuthors, getAllCategories, getAllTags } from '../utils/postHandling/getMeta';
import {readLengthInMinutes} from '../utils/postHandling/readLengthInMinutes';
import {promptAuthor, promptCategory, promptImage, promptDate, promptDescription, promptTags, promptTitle} from './prompts/index.js';


const emptyValue = '___';


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

(async () => {
  const {
    authors: availableAuthors,
    tags: availableTags,
    categories: availableCategories,
  } = getMetaOptions();
  let {files, forceUpdate, bulk} = await prompts([
    {
      type: 'autocompleteMultiselect',
      name: 'files',
      message: 'Select which files you want to generate meta for:',
      choices: [{
        title: 'All',
        value: emptyValue,
      },
        ...postFilePaths.map((file) => ({
        value: file,
        title: file
      }))]
    },
        {
      type: 'confirm',
      name: 'bulk',
      message: 'Set all files to same meta choices?',
      initial: false,
    },
    {
      type:'confirm',
      name: 'forceUpdate',
      message: 'Force reset of all fields?',
      initial: false,
    },

  ]);

  if(files.includes(emptyValue)){
    files = postFilePaths;
  }

  if(bulk){
    console.log(chalk.green('Will write changes to:'));
    files.forEach(file => {
      console.log(`  ${chalk.green(file)}`);
    });
    const author = await promptAuthor(availableAuthors);
    const tags = await promptTags(availableTags);
    const category = await promptCategory(availableCategories);
    const date = await promptDate();
    const image = await promptImage();

    for(const file of files) {
      const {content, data } = await matter.read(path.join(POSTS_PATH, file));
      const readTime = readLengthInMinutes(content);
      let meta = data;
      if(forceUpdate){
        meta = {
          ...data,
          author,
          tags,
          category,
          date,
          image,
          readTime
        }
      } else {
        meta = {
          ...data,
          author: data.author ?? author,
          tags: data.tags ?? tags,
          category: data.category ?? category,
          date: data.date ?? date,
          image: data.image ?? image,
          readTime,
        }
      }
      const fileContent = matter.stringify(content, meta);
      fs.writeFileSync(path.join(POSTS_PATH, file), fileContent);
    }
    
  } else {
    // Not bulk
    for(const file of files){
      console.log(chalk.green(`Working with: ${file}`));
      const {content, data } = await matter.read(path.join(POSTS_PATH, file));
      let meta = data;
      const readTime = readLengthInMinutes(content);
      if(forceUpdate){
        meta = {
          ...data,
          title: await promptTitle(data.title),
          description: await promptDescription(data.description),
          author: await promptAuthor(availableAuthors, data.author),
          tags: await promptTags(availableTags, data.tags),
          category: await promptCategory(availableCategories, data.category),
          date: await promptDate(data.date),
          image: await promptImage(data.image),
          readTime,
        }
      } else {
        meta = {
          ...data,
          title: data.title ?? await promptTitle(data.title),
          description: data.description ?? await promptDescription(data.description),
          author: data.author ?? await promptAuthor(availableAuthors, data.author),
          tags: data.tags ?? await promptTags(availableTags, data.tags),
          category: data.category ?? await promptCategory(availableCategories, data.category),
          date: data.date ?? await promptDate(data.date),
          image: data.image ?? await promptImage(data.image),
          readTime,
        }
      }
      const fileContent = matter.stringify(content, meta);
      fs.writeFileSync(path.join(POSTS_PATH, file), fileContent);
    }
  }
})()