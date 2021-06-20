import React, { useState, useEffect, useRef } from 'react';
import {
  fetchData,
  filterByItemName,
  sortSuggestions,
} from '../service/helpers';
// import '../styles/styles.css';
import '../styles/searchfield.css';
import SearchField from './SearchField';
import SuggestionList from './SuggestionList';

const SearchBar = () => {
  //Search field states
  const [searchedText, setSearchedText] = useState('');
  const [isSearchFieldFocused, setSearchFieldFocus] = useState(false);
  const reference = useRef();

  //Suggestion list states
  const [suggestions, setSuggestions] = useState([]);

  const fetchAPI = async () => {
    try {
      const jsonResponse = await fetchData(searchedText);

      // This is needed because API returns the same information
      const suggestionsFromResponseFiltered = filterByItemName(
        jsonResponse.suggestions,
        searchedText
      );
      const sortedSuggestions = sortSuggestions(
        suggestionsFromResponseFiltered
      );
      setSuggestions(sortedSuggestions);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    if (searchedText.length >= 2 && isSearchFieldFocused) {
      fetchAPI();
    } else if (searchedText.length < 2) {
      setSuggestions([]);
    }
  }, [searchedText, isSearchFieldFocused]);

  return (
    <div>
      <SearchField
        userInput={searchedText}
        updateInput={setSearchedText}
        focus={isSearchFieldFocused}
        setFocus={setSearchFieldFocus}
        reference={reference}
      />
      <SuggestionList suggestions={suggestions} searchedText={searchedText} />
    </div>
  );
};

export default SearchBar;
