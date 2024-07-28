import React from 'react';
import {render} from '@testing-library/react';
import {expect, test, vi} from 'vitest';
import MenuItem from '../MenuItem';
import * as reactRouterDom from 'react-router-dom';
import {MemoryRouter} from 'react-router-dom';

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

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return{
    ...actual,
    useParams: () => ({id: 'nachos'}),
    Navigate: vi.fn(({to}) => (`Redirected to ${to}`)),
  }
});

test('renders the MenuItem component', () => {
    render(
      <MemoryRouter>
        <MenuItem items={items} cantFind='/snacks'/>
      </MemoryRouter>);
});

test('matches snapshot', () => {
    const menuItem = render(
      <MemoryRouter>
        <MenuItem items={items} cantFind='/snacks'/>
      </MemoryRouter>);
    expect(menuItem).toMatchSnapshot();
});

test('displays the correct content if found', function() {

  const {getByText} = render(
    <MemoryRouter>
      <MenuItem items={items} cantFind='/snacks'/>
    </MemoryRouter>);
  expect(getByText('Cover expensive, organic tortilla chips with Cheez Whiz.')).toBeInTheDocument();
});

test('redirects if item is not found', function() {
  reactRouterDom.useParams = () => ({id: 'chips'});
  const {getByText} = render(
    <MemoryRouter>
      <MenuItem items={items} cantFind='/snacks'/>
    </MemoryRouter>);
  expect(getByText('Redirected to /snacks')).toBeInTheDocument();
});