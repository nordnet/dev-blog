import path  from 'path';
import fs from 'fs';
import chalk from 'chalk';

import {loadPosts} from '../utils/server/loadPosts';
import {
  validateAuthor,
  validateTitle,
  validateDescription,
  validateDate,
  validateCategory,
  validateTags,
  validateImage,
  validateReadTime,
} from './validation';

const shouldLog = true;

const log = (message) => {
  if(shouldLog){
    console.log(message);
  }
}


const errorLog = (message) => {
  log(chalk.red(`   ${message}`));
}

const validatePosts = () => {
  const err = loadPosts().map(post => {
    let errors = [];
    const {content, data, filePath} = post;
    if(typeof data !== 'object' || data === null){
      errors.push(`Missing meta data`);
      return;
    }

    errors = [
      ...errors,
      validateAuthor(data.author),
      validateTitle(data.title),
      validateDescription(data.description),
      validateDate(data.date),
      validateCategory(data.category),
      validateTags(data.tags),
      validateImage(data.image),
      validateReadTime(data.readTime),
    ].filter(Boolean);


    if(shouldLog && errors.length > 0){
      log(chalk.yellow(filePath));
      errors.forEach(err => errorLog(err));
    }
    return errors.length;
  }).reduce((total, current) => total + current, 0)
  if(err === 0){
    log(`${chalk.green('Done')} without errors!`)
  } else {
    log('# --- --- --- #')
    log(`${chalk.red('Done')} with ${chalk.red(err)} error(s).`);
    process.exit(1);
  }
}

validatePosts();