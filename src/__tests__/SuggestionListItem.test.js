import React from 'react';
import { render } from '@testing-library/react';
import SuggestionListItem from '../components/SuggestionListItem';
import { highlightWord } from '../service/helpers';

describe('Suggestion List Items', () => {
  const suggestions = [
    {
      searchterm: 'dames truien',
      nrResults: 1501,
    },
    {
      searchterm: 'heren truien',
      nrResults: 1100,
    },
  ];

  const defaultValues = {
    finalItemText: '',
    suggestion: suggestions[0],
    onHover: '',
    hover: { itemHovered: 1 },
    itemNumber: 0,
  };

  it('Should have 1 suggestion', () => {
    const { getAllByRole } = render(
      <SuggestionListItem
        finalItemText={''}
        suggestion={defaultValues.suggestion}
        hover={defaultValues.hover}
        itemNumber={defaultValues.itemNumber}
      />
    );
    expect(getAllByRole('suggestion-list-item')).toHaveLength(1);
  });

  it('Should not have 2 suggestions', () => {
    const { getAllByRole } = render(
      <SuggestionListItem
        finalItemText={''}
        suggestion={defaultValues.suggestion}
        hover={defaultValues.hover}
        itemNumber={defaultValues.itemNumber}
      />
    );
    expect(getAllByRole('suggestion-list-item')).not.toHaveLength(2);
  });

  it('Searched text should be equal to the length of highlighted text', () => {
    const searchedText = 'trui';
    const finalItemText = highlightWord(
      defaultValues.suggestion.searchterm,
      searchedText,
      0
    );

    const { getByRole } = render(
      <SuggestionListItem
        finalItemText={finalItemText}
        suggestion={defaultValues.suggestion}
        hover={defaultValues.hover}
        itemNumber={defaultValues.itemNumber}
      />
    );

    expect(searchedText).toEqual(getByRole('highlighter').textContent);
  });

  it('Should have hover class when hovered', () => {
    const { getByRole } = render(
      <SuggestionListItem
        finalItemText={''}
        suggestion={defaultValues.suggestion}
        hover={{ itemHovered: 0 }}
        itemNumber={0}
      />
    );

    expect(getByRole('suggestion-list-item').classList.contains('hover')).toBe(
      true
    );
  });

  it('Should not have hover class when not hovered', () => {
    const { getByRole } = render(
      <SuggestionListItem
        finalItemText={''}
        suggestion={defaultValues.suggestion}
        hover={{}}
        itemNumber={0}
      />
    );

    expect(getByRole('suggestion-list-item').classList.contains('hover')).toBe(
      false
    );
  });
});
