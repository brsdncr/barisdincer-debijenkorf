import React from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('Search bar tests', () => {
  it('Should update value when input field is changed', () => {
    const { getByTestId } = render(<SearchBar />);
    const input = getByTestId('search-field');

    fireEvent.change(input, {
      target: { value: 'trui' },
    });

    expect(input.value).toBe('trui');
  });

  it('Should have 11 suggestions when trui is searched', async () => {
    const { getByTestId, queryAllByRole } = render(<SearchBar />);
    const input = getByTestId('search-field');

    fireEvent.focus(input);
    fireEvent.change(input, {
      target: { value: 'tr' },
    });
    await waitFor(() =>
      expect(queryAllByRole('suggestion-list-item')).toHaveLength(11)
    );
  });

  it('Should have 0 suggestions when test is searched', async () => {
    const { getByTestId, queryByRole } = render(<SearchBar />);
    const input = getByTestId('search-field');

    fireEvent.focus(input);
    fireEvent.change(input, {
      target: { value: 'test' },
    });
    await waitFor(() => expect(queryByRole('suggestion-list-item')).toBeNull());
  });

  it('Should have 0 suggestions when input field is empty', async () => {
    const { getByTestId, queryByRole } = render(<SearchBar />);
    const input = getByTestId('search-field');

    fireEvent.focus(input);
    fireEvent.change(input, {
      target: { value: '' },
    });
    await waitFor(() => expect(queryByRole('suggestion-list-item')).toBeNull());
  });
});
