import React from 'react';
import {render} from '@testing-library/react';
import Home from "../Home";
import {MemoryRouter} from 'react-router-dom';

const snacks = ['nachos', 'hummus', 'arugula-and-walnut-salad', 'cookie', 'chipscheese'];
const drinks = ['martini', 'negroni', 'gin-and-tonic', 'diet-coke', 'kir', 'manhattan', 'mary'];

it("renders without crashing", function() {
    render(
    <MemoryRouter>
        <Home snacks={snacks} drinks={drinks}/>
    </MemoryRouter>);
});

it("matches snapshot", function() {
    const {asFragment} = render(
        <MemoryRouter>
            <Home snacks={snacks} drinks={drinks}/>
        </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});

it('displays the correct content', function() {

    const {getByText} = render(
        <MemoryRouter>
            <Home snacks={snacks} drinks={drinks}/>
        </MemoryRouter>);
    expect(getByText('Snacks: 5', {exact: false})).toBeInTheDocument();
    expect(getByText('Drinks: 7', {exact: false})).toBeInTheDocument();
});