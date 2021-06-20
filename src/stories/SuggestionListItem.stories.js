import React, { useState } from 'react';
import SuggestionListItem from '../components/SuggestionListItem';
import {
  highlightWord
} from '../service/helpers';

export default {
  title: 'Suggestion List Item Story',
  argTypes: {
    itemNumber: {
      options: [0, 1],
      control: { type: 'radio' },
    },
    finalItemText: {
      table: {
        disable: true,
      },
    },
    suggestion: {
      table: {
        disable: true,
      },
    },
    searchedText: {
      control:{
        readonly: true
      }
    }
  },
  parameters: {
    actions: {
      handles: ['mouseover'],
    },
  },
};

const suggestions = [
  {
    searchterm: 'dames truien',
    nrResults: 1501,
  },
  {
    searchterm: 'heren truien',
    nrResults: 1100,
  },
  {
    searchterm: 'kenzo trui',
    nrResults: 62,
  },
  {
    searchterm: 'calvin klein trui',
    nrResults: 54,
  },
  {
    searchterm: 'calvin klein trui heren blauw',
    nrResults: 50,
  },
];


let itemNumber = 1;
const searchedText = "her";
const suggestion = suggestions[itemNumber];

const finalItemText = highlightWord(suggestion.searchterm, searchedText, 0);
const SuggestionListItemTemplate = (args) => <SuggestionListItem {...args} />

export const SuggestionListItemStory = SuggestionListItemTemplate.bind({});
SuggestionListItemStory.args = {
  itemNumber: 0,
  finalItemText: finalItemText,
  searchedText: searchedText,
  onHover: () => {},
  suggestion: suggestion,
  hover: { itemHovered: itemNumber },
};
