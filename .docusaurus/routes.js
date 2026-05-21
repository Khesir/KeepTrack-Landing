import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/download',
    component: ComponentCreator('/download', 'b81'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', '8cc'),
    exact: true
  },
  {
    path: '/terms',
    component: ComponentCreator('/terms', '2d1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd94'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '0eb'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6ec'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '0ee'),
                exact: true
              },
              {
                path: '/docs/changelog',
                component: ComponentCreator('/docs/changelog', 'c45'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/installation',
                component: ComponentCreator('/docs/installation', '057'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', '5e3'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
