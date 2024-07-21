import {render} from '@testing-library/react';
import {test} from 'vitest';
import Home from '../Home';
import App from '../App';

test('renders the Home component', () => {
    const snacks = ['nachos', 'hummus'];
    const drinks = ['water', 'soda'];
    render(
        <App >
            <Home snacks={snacks} drinks={drinks}/>
        </App>
    );
});