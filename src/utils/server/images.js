import fs from 'fs'
import path from 'path'
import dir from 'node-dir';

import {IMAGES_PREFIX, PATH_DIVIDER} from '../constants';

export const IMAGES_PATH = path.join(process.cwd(), IMAGES_PREFIX)

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const imagesFilePaths = dir
  .files(IMAGES_PATH, {sync: true})
  // Only include md(x) files
  .map(path => path.replace(`${IMAGES_PATH}${PATH_DIVIDER}`, ''))
