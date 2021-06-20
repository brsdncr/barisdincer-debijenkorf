import * as Helpers from '../service/helpers';

const suggestions = [
  {
    searchterm: 'heren truien',
    nrResults: 1100,
  },
  {
    searchterm: 'dames truien',
    nrResults: 1501,
  },
  {
    searchterm: 'kenzo trui',
    nrResults: 62,
  },
  {
    searchterm: 'kenzo trui dames',
    nrResults: 21,
  },
  {
    searchterm: 'kenzo trui heren',
    nrResults: 12,
  },
  {
    searchterm: 'armani truien',
    nrResults: 39,
  },
  {
    searchterm: 'daily paper trui',
    nrResults: 2,
  },
  {
    searchterm: 'calvin klein trui',
    nrResults: 54,
  },
  {
    searchterm: 'calvin klein trui heren rood',
    nrResults: 40,
  },
  {
    searchterm: 'calvin klein trui heren blauw',
    nrResults: 50,
  },
  {
    searchterm: 'calvin klein trui heren oranje',
    nrResults: 42,
  },
];

describe('Fetch Data', () => {
  it('Should fetch data - 11 elements', async () => {
    const searchedText = 'trui';
    const response = await Helpers.fetchData(searchedText);
    expect(response.suggestions.length).toBe(11);
  });

  it('Should throw network error when api path is incorrect', async () => {
    const searchedText = 'trui';

    await expect(Helpers.fetchData(searchedText, 'wrongapi')).rejects.toThrow(
      'Network request failed'
    );
  });
});

describe('Highlighting', () => {
  it('Should return the item information as is - invalid search text', () => {
    const searchedText = 'test';
    const suggestion = suggestions[0];

    let message;
    try {
      const highlightWordArray = Helpers.highlightWord(
        suggestion.searchterm,
        searchedText,
        0
      );
      expect(highlightWordArray.length).toBe(0);
    } catch (error) {
      message = error.message;
      expect(message).toBeTruthy();
    }
  });

  it('Should return an array with object', () => {
    const searchedText = 'trui';
    const suggestion = suggestions[0];

    const highlightedText = Helpers.highlightWord(
      suggestion.searchterm,
      searchedText,
      0
    );

    let objectTypeExists = false;
    objectTypeExists = highlightedText.some((value) => {
      return typeof value === 'object';
    });
    expect(objectTypeExists).toBe(true);
  });

  it('Should return an array with object that contains the searched text as child', () => {
    const searchedText = 'trui';
    const suggestion = suggestions[0];

    const highlightedText = Helpers.highlightWord(
      suggestion.searchterm,
      searchedText,
      0
    );

    let object;
    highlightedText.forEach((element) => {
      if (typeof element === 'object') {
        object = element;
      }
    });

    expect(object.props.children).toEqual(searchedText);
  });
});

describe('Filter by item name', () => {
  it('Should contain 2 elements with input "dam"', async () => {
    const searchedText = 'dam';
    const filteredArray = Helpers.filterByItemName(suggestions, searchedText);
    expect(filteredArray.length).toBe(2);
  });
});

describe('Sort suggestions', () => {
  it('Should sorth the array descending', async () => {
    const sortedArray = Helpers.sortSuggestions(suggestions.slice(0, 5));

    let isSorted = true;
    for (let index = 0; index < sortedArray.length - 1; index++) {
      const number1 = sortedArray[index].nrResults;
      const number2 = sortedArray[index + 1].nrResults;
      if (number1 < number2) {
        isSorted = false;
      }
    }
    expect(isSorted).toBe(true);
  });
});
