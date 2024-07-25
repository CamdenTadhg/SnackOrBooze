import React from 'react';
import SnackOrBoozeApi from '../Api';
import axios from 'axios';

it('should return appropriate data from a get call', async () => {
    const result = await SnackOrBoozeApi.getGoodies('snacks');
    expect(result).toEqual(
        expect.arrayContaining([    {
            "id": "nachos",
            "name": "Nachos",
            "description": "An American classic!",
            "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
            "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
          }])
    );
});

it('should add new data to the database from a post call', async () => {
    const result1 = await SnackOrBoozeApi.addGoodies('snacks', {
        id:'mixednuts',
        name: 'Mixed Nuts',
        description: 'Just about all the nuts you could ever want',
        recipe: 'Mix together at least 5 kinds of nut. Sprinkle with excessive amounts of salt',
        serve: "Serve in a bowl that hasn't been cleaned in a week"
    });
    const result2 = await SnackOrBoozeApi.getGoodies('snacks');
    expect(result2).toEqual(
        expect.arrayContaining([{
            id:'mixednuts',
            name: 'Mixed Nuts',
            description: 'Just about all the nuts you could ever want',
            recipe: 'Mix together at least 5 kinds of nut. Sprinkle with excessive amounts of salt',
            serve: "Serve in a bowl that hasn't been cleaned in a week"
        }])
    );
});