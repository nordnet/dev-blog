
export const title = 'Nordnet.Tech';
export const description = 'A blog from Nordnet.tech';
export const host = 'https://nordnet.tech';

export const getUrl = (relative = '') => {
  return `${host}${ relative.charAt(0) === '/' ? '' : '/' }${relative}`;
}

export const getMeta = ({title, description, tags = [], pageType, image, readTime, author, date, category}) => {
  let article = {};
  const images = [];
  const additionalMetaTags = [];
  if(pageType === 'article'){
    article = {
      publishedTime: date,
      authors: [author],
      tags: [...tags, category],
    }
  }

  if(image){
    images.push({
      url: getUrl(image),
      alt: title,
    })
  }

  if(readTime){
    additionalMetaTags.push({
      property: 'twitter:label1',
      name: 'twitter:label1',
      content: 'Reading time'
    });
    additionalMetaTags.push({
      property: 'twitter:data1',
      name: 'twitter:data1',
      content:  `${readTime} min read`
    });
  }

  return {
    title,
    description,
    keywords: [category, ...tags]?.join(', '),
    additionalMetaTags,
    openGraph:{
      type: pageType ? pageType : 'website',
      article,
      title,
      description,
      images,
    },
    twitter: {
      title,
      description,
    }
  }
}

export default {
  titleTemplate: `${title} | %s`,
  defaultTitle: title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: host,
    site_name: title,
    title,
    description,
    images:[
      {
        url: getUrl(`/images/Blue_Shell.png`),
        width: 315,
        height: 313,
        alt: title,
      }
    ]
  },
  twitter: {
    site: '@nordnet',
    cardType: 'summary_large_image',
  },
};