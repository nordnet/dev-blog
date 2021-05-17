import {sortBy} from 'lodash';
import { isValid } from 'date-fns'

export const sortPostsByDate = (posts = []) => {
  return sortBy(posts, (post) => {
    if(post?.data?.date){
      const d = new Date(post.data.date);
      if(isValid(d)){
        return -d.getTime();
      }
    } 
    return 0;
  });
}