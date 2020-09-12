export default {
  "title": "沐云记",
  "tagline": "沐沐的美好生活",
  "url": "http://blog.kail.xyz/mumu/",
  "baseUrl": "/mumu/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "kailbin",
  "projectName": "mumu",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "沐云记",
      "logo": {
        "alt": "沐云记-alt",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "label": "Blog",
          "to": "blog",
          "position": "right"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/kailbin/mumu",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "copyright": "Copyright © 2020"
    }
  },
  "plugins": [
    [
      "@docusaurus/plugin-sitemap",
      {
        "cacheTime": 600000,
        "changefreq": "weekly",
        "priority": 0.5
      }
    ]
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/kail/IdeaProjects/github/kailbin/mumu/sidebars.js",
          "editUrl": "https://github.com/kailbin/mumu/edit/master/docusaurus/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/kailbin/mumu/edit/master/docusaurus/"
        },
        "theme": {
          "customCss": "/Users/kail/IdeaProjects/github/kailbin/mumu/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": []
};