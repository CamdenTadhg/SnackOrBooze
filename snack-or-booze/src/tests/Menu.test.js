import React from 'react';
import {render} from '@testing-library/react';
import Menu from "../Menu";

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

it("renders without crashing", function() {
    render(<Menu items={items} type='snacks'/>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Menu items={items} type='snacks'/>);
    expect(asFragment()).toMatchSnapshot();
});

it('displays the correct content', function() {

    
    const {getByText} = render(<Menu items={items} type="snacks"/>);
    expect(getByText('Snack Menu', {exact: false})).toBeInTheDocument();
    expect(getByText('Hummus', {exact: false})).toBeInTheDocument();
});