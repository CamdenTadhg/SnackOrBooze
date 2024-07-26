import {render} from '@testing-library/react';
import {test, expect} from 'vitest';
import Home from '../Home';
import {MemoryRouter} from 'react-router-dom';

const snacks = ['nachos', 'hummus', 'arugula-and-walnut-salad', 'cookie', 'chipscheese'];
const drinks = ['martini', 'negroni', 'gin-and-tonic', 'diet-coke', 'kir', 'manhattan', 'mary'];

test('renders the Home component', () => {
    render(
        <MemoryRouter>
            <Home snacks={snacks} drinks={drinks}/>
        </MemoryRouter>)
});

test('it matches snapshot', () => {
    const home = render(
        <MemoryRouter>
            <Home snacks={snacks} drinks={drinks}/>
        </MemoryRouter>);
    expect(home).toMatchSnapshot
});

test('renders the right content', () => {
    const {getByText} = render(
        <MemoryRouter>
            <Home snacks={snacks} drinks={drinks}/>
        </MemoryRouter>);
    expect(getByText('Snacks: 5', {exact: false})).toBeInTheDocument();
    expect(getByText('Drinks: 7', {exact: false})).toBeInTheDocument();
})