import {render} from '@testing-library/react';
import {expect, test} from 'vitest';
import Menu from '../Menu';

const items = [    {
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
}];

test('renders the Menu component', () => {
    render(<Menu items={items} type='snacks'/>);
});

test('matches snapshot', () => {
  const menu = render(<Menu items={items} type='snacks'/>);
  expect(menu).toMatchSnapshot();
});

test('renders the correct content', () => {
  const {getByText} = reander(<Menu items={items} type='snacks'/>);
  expect(getByText(/Snacks Menu/i)).toBeInTheDocument();
})