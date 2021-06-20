import React from 'react';
import SearchField from '../components/SearchField';

export default {
  title: 'Search Field Story',
  
};

const SearchFieldTemplate = (args) => <SearchField {...args} />;

export const SearchFieldStory = SearchFieldTemplate.bind({});
SearchFieldStory.args = {
  userInput: 'Test',
};
