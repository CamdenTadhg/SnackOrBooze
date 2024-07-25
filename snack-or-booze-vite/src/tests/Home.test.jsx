import {render} from '@testing-library/react';
import {test, expect} from 'vitest';
import Home from '../Home';

const snacks = ['nachos', 'hummus', 'arugula-and-walnut-salad', 'cookie', 'chipscheese'];
const drinks = ['martini', 'negroni', 'gin-and-tonic', 'diet-coke', 'kir', 'manhattan', 'mary'];

test('renders the Home component', () => {
    render(<Home snacks={snacks} drinks={drinks}/>)
});

test('it matches snapshot', () => {
    const home = render(<Home snacks={snacks} drinks={drinks}/>);
    expect(home).toMatchSnapshot
});

test('renders the right content', () => {
    const {getByText} = render(<Home snacks={snacks} drinks={drinks}/>);
    expect(getByText('Snacks: 5', {exact: false})).toBeInTheDocument();
    expect(getByText('Drinks: 7', {exact: false})).toBeInTheDocument();
})