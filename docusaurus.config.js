module.exports = {
  title: 'Template-Docusaurus',
  tagline: 'Sub Title Template-Docusaurus',
  url: 'http://kail.xyz/Template-Docusaurus',
  baseUrl: '/Template-Docusaurus/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'hello-world-example', // Usually your GitHub org/user name.
  projectName: 'Template-Docusaurus', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    navbar: {
      title: 'Template-Docusaurus',
      logo: {
        alt: 'Template-Docusaurus-alt',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Docs',
          to: 'docs/',
          activeBasePath: 'docs',
          position: 'left',
        },
        {
          label: 'Blog', 
          to: 'blog',
          position: 'left'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/hello-world-example/Template-Docusaurus',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
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
      copyright: `Copyright © ${new Date().getFullYear()} Template-Docusaurus, Inc. Built with Docusaurus.`,
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
            'https://github.com/hello-world-example/Template-Docusaurus/edit/master/docusaurus/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hello-world-example/Template-Docusaurus/edit/master/docusaurus/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
