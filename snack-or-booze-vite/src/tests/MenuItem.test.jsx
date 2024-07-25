import React, {useParams} from 'react';
import {render} from '@testing-library/react';
import {expect, test, vi} from 'vitest';
import MenuItem from '../MenuItem';

const items = [
    {
        "id": "nachos",
        "name": "Nachos",
        "description": "An American classic!",
        "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
        "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
      },
      {
        "id": "hummus",
        "name": "Hummus",
        "description": "Sure to impress your vegan friends!",
        "recipe": "Purchase one container of hummus.",
        "serve": "Place unceremoniously on the table, along with pita bread."
      },
];

test('renders the MenuItem component', () => {
    render(<MenuItem items={items} cantFind='/snacks'/>);
});

test('matches snapshot', () => {
    const menuItem = render(<MenuItem items={items} cantFind='/snacks'/>);
    expect(menuItem).toMatchSnapshot();
})

test('displays the correct content if found', function() {
  let mockParam = {id: 'nachos'};

  vi.mock('react-router-dom', () => ({
    ...vi.requireActual('react-router-dom'),
    useParams: () => mockParam
  }));

  const {getByText} = render(<MenuItem items={items} cantFind='/snacks'/>);
  expect(getByText('Recipe: Cover expensive, organic tortilla chips with Cheez Whiz.')).toBeInTheDocument();
});

test('redirects if item is not found', function() {
  let mockParam = {id: 'chips'};

  vi.mock('react-router-dom', () => ({
    ...vi.requireActual('react-router-dom'),
    useParams: () => mockParam
  }));

  vi.mock('react-router-dom', () => {
    return {
      Redirect: vi.fn(({to}) => `Redirected to ${to}`),
    };
  });

  const {getByText} = render(<MenuItem items={items} cantFind='/snacks'/>);
  expect(getByText('Redirected to /snacks')).toBeInTheDocument();
})