import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'installation', 'quickstart'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Updates',
      items: ['changelog'],
      collapsed: false,
    },
  ],
};

export default sidebars;
