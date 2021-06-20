import React from 'react';
import { render } from '@testing-library/react';
import SearchField from '../components/SearchField';

describe('Search field tests', () => {
  const defaultValues = {
    userInput: 'trui',
    focus: true,
    setFocus: () => {},
  };

  it('Should own clear button when user input is available', () => {
    const { queryAllByRole } = render(
      <SearchField userInput={'tr'} focus={defaultValues.focus} />
    );
    expect(queryAllByRole('clear')).toHaveLength(1);
  });

  it('Should not have clear button when user input is not available', () => {
    const { queryByRole } = render(
      <SearchField userInput={''} focus={defaultValues.focus} />
    );
    expect(queryByRole('clear')).toBeNull();
  });
});
