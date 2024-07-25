import React from 'react';
import {render} from '@testing-library/react';
import Home from "../Home";

const snacks = ['nachos', 'hummus', 'arugula-and-walnut-salad', 'cookie', 'chipscheese'];
const drinks = ['martini', 'negroni', 'gin-and-tonic', 'diet-coke', 'kir', 'manhattan', 'mary'];

it("renders without crashing", function() {
    render(<Home snacks={snacks} drinks={drinks}/>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Home snacks={snacks} drinks={drinks}/>);
    expect(asFragment()).toMatchSnapshot();
});

it('displays the correct content', function() {

    const {getByText} = render(<Home snacks={snacks} drinks={drinks}/>);
    expect(getByText('Snacks: 5', {exact: false})).toBeInDocument();
    expect(getByText('Drinks:7', {exact: false})).toBeInDocument();
});