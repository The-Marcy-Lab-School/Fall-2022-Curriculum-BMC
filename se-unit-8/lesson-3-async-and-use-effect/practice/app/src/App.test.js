import React from 'react';
import ReactDOM from 'react-dom';
import { act, render, waitForElement } from '@testing-library/react';

import App from './app';

jest.mock('./fetchPokemon');

describe('App', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<App />, document.createElement('div') )
  })

  it('displays text "...Loading" while fetching Pokemon', async () => {
    await act(async () => {
      const { getByText } = render(<App />);
      expect(getByText('...Loading')).toBeDefined();
    })
  });

  it('renders a list item for each Pokemon', async () => {
      const { getByRole } = render(<App />);
      const list = await waitForElement( () => getByRole('list') );

      const expectedLength = 3;
      expect(list.children.length).toEqual(expectedLength);
    });
})
