import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from "../App";
import SnackOrBoozeApi from '../Api';

jest.mock(SnackOrBoozeApi);

it("renders without crashing", function() {
    render(<App />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});

it('displays the loading screen', function () {
    const {getByText} = render(<App />);
    expect(getByText('Loading', {exact: false})).toBeInDocument();
});

it('displays the correct content', function () {
    const mockSnacks = ['nachos', 'hummus', 'arugula-and-walnut-salad', 'cookie', 'chipscheese'];
    const mockDrinks = ['martini', 'negroni', 'gin-and-tonic', 'diet-coke', 'kir', 'manhattan', 'mary'];
    SnackOrBoozeApi.getGoodies.mockResolvedValue({data: mockSnacks}).mockResolvedValue({data: mockDrinks});

    const {getByText} = render(<App />);
    expect(getByText('Snacks: 5', {exact: false})).toBeInDocument();
    expect(getByText('Drinks:7', {exact: false})).toBeInDocument();
});