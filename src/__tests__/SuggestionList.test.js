import React from 'react';
import { render } from '@testing-library/react';
import SuggestionList from '../components/SuggestionList';

describe('Update suggestion list', () => {
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

  it('Should match 2 - suggestions', () => {
    const { getAllByRole } = render(
      <SuggestionList
        suggestions={suggestions.slice(0, 2)}
        searchedText={'klein'}
      />
    );
    expect(getAllByRole('suggestion-list-item')).toHaveLength(2);
  });

  it('Should match 5 - suggestions', () => {
    const { getAllByRole } = render(
      <SuggestionList suggestions={suggestions} searchedText={'trui'} />
    );

    expect(getAllByRole('suggestion-list-item')).toHaveLength(5);
  });

  it('Should be null -  0 suggestions', () => {
    const { queryByRole } = render(
      <SuggestionList
        suggestions={suggestions.slice(0, 0)}
        searchedText={'test'}
      />
    );
    expect(queryByRole('suggestion-list-item')).toBeNull();
  });
});
