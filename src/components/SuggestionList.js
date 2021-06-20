import React, { useState } from 'react';
import { highlightWord } from '../service/helpers';
import SuggestionListItem from './SuggestionListItem';
import '../styles/suggestionbox.css';

const SuggestionList = ({ suggestions = [], searchedText }) => {
  const [isSuggestionItemFocused, setSuggestionItemFocus] = useState({});
  return (
    <div
      data-testid='suggestion-box'
      className={`suggestion-box ${
        suggestions.length > 0 ? 'fadein' : 'fadeout'
      }`}
    >
      <div className='list' data-testid='suggestion-list'>
        {suggestions.length > 0 &&
          suggestions.map((suggestion, index) => {
            const finalItemText = highlightWord(
              suggestion.searchterm,
              searchedText,
              index
            );
            return (
              <SuggestionListItem
                itemNumber={index}
                hover={isSuggestionItemFocused}
                onHover={setSuggestionItemFocus}
                suggestion={suggestion}
                finalItemText={finalItemText}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SuggestionList;
