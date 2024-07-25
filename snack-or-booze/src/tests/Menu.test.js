import React from 'react';
import {render} from '@testing-library/react';
import Menu from "../Menu";

it("renders without crashing", function() {
    render(<Menu />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Menu />);
    expect(asFragment()).toMatchSnapshot();
});

it('displays the correct content', function() {
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
    
    const {getByText} = render(<Menu items={items} type="snacks"/>);
    expect(getByText('Snack Menu', {exact: false})).toBeInTheDocument();
    expect(getByText('Hummus', {exact: false})).toBeInTheDocument();
});