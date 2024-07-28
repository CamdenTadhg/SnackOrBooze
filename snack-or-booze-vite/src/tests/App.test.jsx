import {render, screen, waitFor, act} from '@testing-library/react';
import {test, expect, vi} from 'vitest';
import App from '../App';
import SnackOrBoozeApi from '../Api';

//mock the api call to gather appropriate data
vi.mock('SnackOrBoozeApi', () => ({
  getGoodies: vi.fn((type) => {
    if (type ==="snacks"){
      return Promise.resolve([    {
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
          }]);
    }
    if (type ==='drinks'){
      return Promise.resolve([    {
            "id": "martini",
            "name": "Martini",
            "description": "An ice-cold, refreshing classic.",
            "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
            "serve": "Serve very cold, straight up."
          },
          {
            "id": "negroni",
            "name": "Negroni",
            "description": "A nice drink for a late night conversation.",
            "recipe": "Mix equal parts of gin, Campari, and sweet vermouth.",
            "serve": "Serve cold, either on the rocks or straight up."
          }]);
    }
  })
}));

test('renders the App component', async () => {
  await act(async () => {render(<App />)});
  await waitFor(() => expect(true).toBe(true));
});

test('it matches snapshot', async () => {
    let app;
    await act(async () => {
      app = render(<App />)
    });
    await waitFor(() => expect(app).toMatchSnapshot());
});

test('it displays loading message', async () => {
  const {getByText} = render(<App/>);
  expect(getByText('Loading', {exact: false})).toBeInTheDocument();
});

test('fetches and displays api data', async () => {
    await act(async () => {render(<App />)});

    await waitFor(() => expect(screen.getByText('Snacks: 2')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Drinks: 2')).toBeInTheDocument());
});