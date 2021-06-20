import React, { useState } from 'react';
import Button from './Button';
import '../styles/searchfield.css';

const SearchField = ({
  userInput,
  updateInput,
  focus,
  setFocus,
  reference,
  ...props
}) => {
  const [clearButtonIsHovered, setClearButtonIsHovered] = useState(false);
  const [searchButtonIsHovered, setSearchButtonIsHovered] = useState(false);
  return (
    <form className={`form ${focus ? 'focused' : ''}`} action='/' method='get'>
      <input
        ref={reference}
        type='search'
        className={`${props.classname ? props.classname : 'search-field'}`}
        placeholder='Zoeken'
        value={userInput}
        onChange={(event) => updateInput(event.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        data-testid='search-field'
      />
      <Button
        active={userInput ? true : false}
        classname={'clear-button'}
        src={'close.svg'}
        alt={'close'}
        hover={clearButtonIsHovered}
        onHover={setClearButtonIsHovered}
        onClick={() => {
          updateInput('');
          setClearButtonIsHovered('');
        }}
        role={'clear'}
      />
      <Button
        active={true}
        classname={'search-button'}
        src={'search.svg'}
        alt={'search'}
        hover={searchButtonIsHovered}
        onHover={setSearchButtonIsHovered}
        onClick={(event) => event.preventDefault()}
        role={'search'}
      />
    </form>
  );
};

export default SearchField;
