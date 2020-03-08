// .vuepress/config.js
module.exports = {
  base: '/resources/',

  // Title of your website
  title: 'Drupal Indonesia',

  // Description of your website
  description: 'This is blog for Drupal Indonesia',

  // Language of your website
  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: 'en-US',

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'Drupal ID',

      // Introduction of yourself (HTML supported)
      description: 'Happy Coding<br/>Happy Life',

      // Email
      email: 'email@domain.com',

      // Your location
      location: 'Indonesia',

      // Your organization
      organization: 'Drupal Indonesia',

      // Your avatar image
      // Set to external link
      avatar: 'https://i.ibb.co/nRjMg2F/logo.png',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/drupal-id',
        },

        // Facebook account and link
        facebook: {
          account: 'drupal-id',
          link: 'https://www.facebook.com/groups/drupal.indonesia/',
        },

        // Twitter account and link
        twitter: {
          account: 'meteorlxy_cn',
          link: '#',
        },

        // Medium account and link
        medium: {
          account: 'meteorlxy.cn',
          link: '#',
        },

        // Instagram account and link
        instagram: {
          account: 'meteorlxy.cn',
          link: 'https://www.instagram.com/drupalid',
        },

        // Docker Hub account and link
        docker: {
          account: 'meteorlxy',
          link: '#',
        },
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/assets/img/header-3.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: true,

      // Add your custom footer (HTML supported)
      custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">meteorlxy</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: 'https://i.ibb.co/cDxWm5T/header-2.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'About', link: '/custom-pages/about', exact: false },
      { text: 'Github', link: 'https://github.com/drupal-id' },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'drupal-id',
      repo: 'resources',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}