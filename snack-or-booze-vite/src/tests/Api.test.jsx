import SnackOrBoozeApi from '../Api';
import '@testing-library/jest-dom/vitest';
import axios from 'axios';
import {beforeEach, test, vi, expect} from 'vitest';



test('gets snacks data', async () => {

  vi.mock('axios');
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
  axios.get.mockResolvedValueOnce(snacks);

  const results = await SnackOrBoozeApi.getGoodies('snacks');
  expect(results.length).toBe(3);
});

test('adds data to database', async () => {
  const result1 = await SnackOrBoozeApi.addGoodies('snacks',{
    id:'mixednuts',
    name: 'Mixed Nuts',
    description: 'Just about all the nuts you could ever want',
    recipe: 'Mix together at least 5 kinds of nut. Sprinkle with excessive amounts of salt',
    serve: "Serve in a bowl that hasn't been cleaned in a week"
  }); 
  expect(result1).toEqual({
    id:'mixednuts',
    name: 'Mixed Nuts',
    description: 'Just about all the nuts you could ever want',
    recipe: 'Mix together at least 5 kinds of nut. Sprinkle with excessive amounts of salt',
    serve: "Serve in a bowl that hasn't been cleaned in a week"
  })
  const result2 = await SnackOrBoozeApi.getGoodies('snacks');
  expect(result2).toEqual(
    expect.arrayContaining([{            
      id:'mixednuts',
      name: 'Mixed Nuts',
      description: 'Just about all the nuts you could ever want',
      recipe: 'Mix together at least 5 kinds of nut. Sprinkle with excessive amounts of salt',
      serve: "Serve in a bowl that hasn't been cleaned in a week"}])
  );
});