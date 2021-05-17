import NextImage from 'next/image';

export const Image = (props) => {
  return <NextImage layout="intrinsic" width={500} height={500} {...props} />
}

export default Image;