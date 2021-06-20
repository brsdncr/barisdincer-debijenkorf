import React from 'react';

//Sort suggestions desc by their nrResults
const sortSuggestions = (suggestionArray) => {
  return suggestionArray.sort((suggestion1, suggestion2) => {
    return suggestion2.nrResults - suggestion1.nrResults;
  });
};

const fetchData = async (
  searchedText,
  apiPath = `http://localhost:3000/search?q=`
) => {
  try {
    const response = await fetch(`${apiPath}${searchedText}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

const filterByItemName = (suggestions, searchedText) => {
  return suggestions.filter((suggestion) => {
    return suggestion.searchterm.includes(searchedText.toLowerCase());
  });
};

const highlightWord = (source, searchedText, index, callback) => {
  try {
    const role = 'highlighter';
    const defaultHighlight = (value) => (
      <span className='light-text' role={role} key={index}>
        {value.toLowerCase()}
      </span>
    );

    // Needed if the searchedText includes ambiguous characters that are valid regex operators.
    const escapeRegex = (searchedText) =>
      searchedText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const res = [];
    if (!source) return res;
    if (!searchedText) return source;

    const regex = new RegExp(escapeRegex(searchedText), 'gi');

    let lastOffset = 0;

    // Uses replace callback, but not its return value
    source.replace(regex, (val, offset) => {
      // Push both the last part of the string, and the new part with the highlight
      res.push(
        source.substr(lastOffset, offset - lastOffset),
        // Replace the string with JSX or anything.
        (callback || defaultHighlight)(val)
      );
      lastOffset = offset + val.length;
    });

    // Push the last non-highlighted string
    res.push(source.substr(lastOffset));
    return res;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export { sortSuggestions, fetchData, filterByItemName, highlightWord };
