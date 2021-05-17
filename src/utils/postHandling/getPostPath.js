import { PATH_DIVIDER, PREFIX, FILE_TYPE_REGEX } from '../constants';

export const getPostPath = (post) => {
  return `${PATH_DIVIDER}${PREFIX}${PATH_DIVIDER}${post.filePath.replace(FILE_TYPE_REGEX, '')}`
}
