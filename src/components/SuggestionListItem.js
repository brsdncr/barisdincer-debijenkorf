import React from 'react';

const SuggestionListItem = (props) => {
  const { finalItemText, suggestion, onHover, hover, itemNumber } = props;
  const role = 'suggestion-list-item';
  return (
    <div
      role={role}
      className={`item ${hover.itemHovered === itemNumber ? 'hover' : ''}`}
      onMouseEnter={() => onHover({ itemHovered: itemNumber })}
      onMouseLeave={() => onHover({ itemHovered: null })}
      onClick={() => {
        window.alert(
          `${suggestion.searchterm} (index ${itemNumber}) is clicked`
        );
      }}
    >
      {finalItemText}
      <span className='light-text'> {`(${suggestion.nrResults})`}</span>
    </div>
  );
};

export default SuggestionListItem;
