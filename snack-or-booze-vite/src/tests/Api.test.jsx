import SnackOrBoozeApi from '../Api';
import '@testing-library/jest-dom/vitest';
import axios from 'axios';
import {test, vi, expect} from 'vitest';

test('gets  data', async () => {
  const results = await SnackOrBoozeApi.getGoodies('drinks');
  expect(results.length).toBe(7);
});

test('adds data to database', async () => {
  const result1 = await SnackOrBoozeApi.addGoodies('snacks', {
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