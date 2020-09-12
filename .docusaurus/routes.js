
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/mumu/',
  component: ComponentCreator('/mumu/','7ab'),
  exact: true,
},
{
  path: '/mumu/__docusaurus/debug',
  component: ComponentCreator('/mumu/__docusaurus/debug','af7'),
  exact: true,
},
{
  path: '/mumu/__docusaurus/debug/config',
  component: ComponentCreator('/mumu/__docusaurus/debug/config','6bd'),
  exact: true,
},
{
  path: '/mumu/__docusaurus/debug/content',
  component: ComponentCreator('/mumu/__docusaurus/debug/content','a45'),
  exact: true,
},
{
  path: '/mumu/__docusaurus/debug/metadata',
  component: ComponentCreator('/mumu/__docusaurus/debug/metadata','882'),
  exact: true,
},
{
  path: '/mumu/__docusaurus/debug/registry',
  component: ComponentCreator('/mumu/__docusaurus/debug/registry','f0f'),
  exact: true,
},
{
  path: '/mumu/__docusaurus/debug/routes',
  component: ComponentCreator('/mumu/__docusaurus/debug/routes','fc6'),
  exact: true,
},
{
  path: '/mumu/blog',
  component: ComponentCreator('/mumu/blog','867'),
  exact: true,
},
{
  path: '/mumu/blog/hello-world',
  component: ComponentCreator('/mumu/blog/hello-world','d0d'),
  exact: true,
},
{
  path: '/mumu/blog/hola',
  component: ComponentCreator('/mumu/blog/hola','653'),
  exact: true,
},
{
  path: '/mumu/blog/tags',
  component: ComponentCreator('/mumu/blog/tags','f5f'),
  exact: true,
},
{
  path: '/mumu/blog/tags/docusaurus',
  component: ComponentCreator('/mumu/blog/tags/docusaurus','f25'),
  exact: true,
},
{
  path: '/mumu/blog/tags/facebook',
  component: ComponentCreator('/mumu/blog/tags/facebook','d2c'),
  exact: true,
},
{
  path: '/mumu/blog/tags/hello',
  component: ComponentCreator('/mumu/blog/tags/hello','c7e'),
  exact: true,
},
{
  path: '/mumu/blog/tags/hola',
  component: ComponentCreator('/mumu/blog/tags/hola','fd8'),
  exact: true,
},
{
  path: '/mumu/blog/welcome',
  component: ComponentCreator('/mumu/blog/welcome','fe4'),
  exact: true,
},
{
  path: '/mumu/docs',
  component: ComponentCreator('/mumu/docs','9fc'),
  
  routes: [
{
  path: '/mumu/docs/',
  component: ComponentCreator('/mumu/docs/','629'),
  exact: true,
},
{
  path: '/mumu/docs/asd/doc2',
  component: ComponentCreator('/mumu/docs/asd/doc2','9dc'),
  exact: true,
},
{
  path: '/mumu/docs/doc3',
  component: ComponentCreator('/mumu/docs/doc3','39d'),
  exact: true,
},
{
  path: '/mumu/docs/mdx',
  component: ComponentCreator('/mumu/docs/mdx','3a7'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
