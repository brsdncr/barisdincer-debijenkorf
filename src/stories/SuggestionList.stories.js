import React from 'react';
import SuggestionList from '../components/SuggestionList';

export default {
  title: 'Suggestion List Story',
  argTypes: {
    searchedText: {
      table: {
        disable: true,
      },
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

const SuggestionListTemplate = (args) => <SuggestionList {...args} />;

export const SuggestionListStory = SuggestionListTemplate.bind({});
SuggestionListStory.args = {
  suggestions: suggestions,
  searchedText: 'trui',
};
