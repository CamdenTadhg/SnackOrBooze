import {render} from '@testing-library/react';
import {test} from 'vitest';
import NavBar from '../NavBar';
import App from '../App';

test('renders the NavBar component', () => {
    render(
        <App>
            <NavBar />
        </App>
    );
})