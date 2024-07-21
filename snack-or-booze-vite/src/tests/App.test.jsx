import {render} from '@testing-library/react';
import {test, vi} from 'vitest';
import App from '../App';


test('renders the App component', () => {
    render(<App />);
});