module.exports = {
  title: '沐云记',
  tagline: '沐沐的美好生活',
  url: 'http://blog.kail.xyz/mumu/',
  baseUrl: '/mumu/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'kailbin', // Usually your GitHub org/user name.
  projectName: 'mumu', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      title: '沐云记',
      logo: {
        alt: '沐云记-alt',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   label: 'Docs',
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   position: 'left',
        // },
        {
          label: 'Blog', 
          to: 'blog',
          position: 'right'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/kailbin/mumu',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-sitemap',  {
        cacheTime: 600 * 1000, // 600 sec - cache purge period
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',  {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kailbin/mumu/edit/master/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/kailbin/mumu/edit/master/docusaurus/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
