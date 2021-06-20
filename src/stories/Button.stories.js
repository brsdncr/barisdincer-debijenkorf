import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button Stories',
  argTypes: {
    active: {
      options: [true, false],
      control: { type: 'radio' },
    },
    src: {
      options: ['close.svg', 'search.svg', 'null'],
      control: { type: 'radio' },
    },
    classname: {
      table: {
        disable: true,
      },
    },
    hover: {
      options: [true, false],
      control: { type: 'radio' },
    },
    onClick: { name: 'onClick', action: 'On button clicked' },
  },
};

const ButtonTemplate = (args) => <Button {...args} />;

export const ButtonStory = ButtonTemplate.bind({});
ButtonStory.args = {
  active: true,
  classname: 'clear-button',
  src: 'close.svg',
  alt: 'close',
  hover: true,
};
