import {kebabCase} from 'lodash';

export const urlify = (value) => value.split('/').map((s) => kebabCase(s)).join('/')

export const validateSlug = (slug) => {
  if(/\.\./.test(slug)){
    return 'Can not contain ..'
  }
  return slug === urlify(slug) ? true : 'Must be kebab-case (/ is also allowed).'
}