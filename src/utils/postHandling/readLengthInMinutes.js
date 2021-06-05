import wordCount from 'word-count';

const WORDS_PER_MINUTE = 265;


export const readLengthInMinutes = (text = '', wordsPerMinute = 265) => {
  const count = wordCount(text);
  return Math.ceil(count / wordsPerMinute);
}