import React, {useParams} from 'react';
import {render} from '@testing-library/react';
import MenuItem from "../MenuItem";

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
    render(<MenuItem items={items} cantFind='/snacks'/>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<MenuItem items={items} cantFind='/snacks'/>);
    expect(asFragment()).toMatchSnapshot();
});

it('displays the correct content if item is found', function() {

    let mockParam = {id: 'nachos'};

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => mockParam
    }));

    const {getByText} = render(<MenuItem items={items} cantFind="/snacks"/>);
    expect(getByText('Recipe: Cover expensive, organic tortilla chips with Cheez Whiz.')).toBeInTheDocument();
});

it('redirects if item is not found', function() {

    let mockParam = {id: 'chips'};

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => mockParam
    }));

    jest.mock('react-router-dom', () => {
        return {
            Redirect: jest.fn(({to}) => `Redirected to ${to}`),
        };
    });

    const {getByText} = render(<MenuItem items={items} cantFind="/snacks" />);
    expect(getByText('Redirected to /snacks')).toBeInTheDocument();
});