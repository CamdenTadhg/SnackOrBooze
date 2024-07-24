import SnackOrBoozeApi from '../Api';
import '@testing-library/jest-dom/vitest';
import axios from 'axios';
import {beforeEach, test, vi, expect} from 'vitest';

vi.mock('axios');

beforeEach(() => {
    axios.get.mockClear();
    const snacks = {data: [    {
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
      {
        "id": "arugula-and-walnut-salad",
        "name": "Arugula and Walnut Salad",
        "description": "Tart and delicious.",
        "recipe": "Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil.",
        "serve": "Place on tiny, precious little plates."
      }]};
    const drinks = {data: [    {
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
      }]};
      axios.get.mockResolvedValueOnce(snacks);
      axios.get.mockResolvedValueOnce(drinks);
});

test('gets snacks data', async () => {
    const results = await SnackOrBoozeApi.getGoodies('snacks');
    expect(results.length).toBe(3);
});

test('gets drinks data', async () => {
    const results = await SnackOrBoozeApi.getGoodies('drinks');
    expect(results.length).toBe(2);
})

//post returns the data entered. 