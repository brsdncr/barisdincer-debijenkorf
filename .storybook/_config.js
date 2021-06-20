import { configure } from '@storybook/react';

configure(require.context('../src', true, /\.stories\.js$/), module);

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
  ],
};
