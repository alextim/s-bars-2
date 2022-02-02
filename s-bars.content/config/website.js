// change it to actual site URL
const siteUrl = 'https://s-bars.com.ua'; // No trailing slash!

module.exports = {
  /* Meta */
  siteUrl,

  /**
   * name of content folder
   */
  contentDir: 's-bars.content',

  /**
   * Schema org
   *
   * folder: /static/assets
   *  */
  siteBusinessPhoto: [
    `${siteUrl}/assets/images/organization/1x1/business-photo.jpg`,
    `${siteUrl}/assets/images/organization/4x3/business-photo.jpg`,
    `${siteUrl}/assets/images/organization/16x9/business-photo.jpg`,
  ],
  siteLogo: `${siteUrl}/assets/images/logo.svg`,

  /**
   * Open Graph Image
   *
   * meta property="og:image
   * one image per locale
   *
   * Sample file name: banner-ru.jpg
   *
   * folder: /static/assets/images
   * */
  ogImage: {
    src: `${siteUrl}/assets/images/og/banner-`,
    width: 1200,
    height: 630,
  },

  /**
   * Twitter Image
   *
   * meta name="twitter:image
   * one image per locale
   *
   * Sample file name: banner-ru.jpg
   *
   * folder: /static/assets/images
   *  */
  twitterImage: {
    src: `${siteUrl}/assets/images/twitter/2x1/banner-`,
    width: 600,
    height: 300,
  },

  /**
   * In order to use Facebook Insights you must add the app ID to your page.
   * Insights lets you view analytics for traffic to your site from Facebook.
   *
   * meta property="fb:app_id
   */
  fbAppID: '',

  /**
   * Twitter URL
   *
   * meta name="twitter:site"
   *  * */
  twitterSite: '',

  /**
   * Twitter Id
   *
   * meta name="twitter:creator"
   *  */
  twitterCreator: '',

  googleAnalyticsID: 'UA-24264154-1',

  /**
   * webmanifest
   *  */
  // meta name="theme-color"
  themeColor: '#3498DB',
  backgroundColor: '#2e3246',

  // prefix will be used in  site URL
  postDirs: {
    blog: { folder: 'blog/posts', prefix: 'blog' },
  },
  pageDirs: {
    page: { folder: 'pages' },
    service: { folder: 'services', prefix: 'services' },
    object: { folder: 'object-types', prefix: 'tipy-obektov' },
    blogPage: { folder: 'blog/pages' },
  },
  authorDirs: {
    author: { folder: 'blog/authors', prefix: 'authors' },
  },

  cardsPerPage: 12,

  templatesDir: '/templates/',

  readMore: 'post.readMore',
};
