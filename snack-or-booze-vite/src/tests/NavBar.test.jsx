import {render} from '@testing-library/react';
import {expect, test} from 'vitest';
import NavBar from '../NavBar';
import App from '../App';

test('renders the NavBar component', () => {
    render(<NavBar />);
});

test('matches snapshot', () => {
    const navBar = render(<NavBar />);
    expect(navBar).toMatchSnapshot();
});

test('renders the right content', async () => {
    const {getByText} = render(<NavBar />);
    expect(getByText(/Add to Menu/i)).toBeInTheDocument();
})