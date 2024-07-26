import {render} from '@testing-library/react';
import {expect, test} from 'vitest';
import NavBar from '../NavBar';
import App from '../App';
import {MemoryRouter} from 'react-router-dom';

test('renders the NavBar component', () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>);
});

test('matches snapshot', () => {
    const navBar = render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>);
    expect(navBar).toMatchSnapshot();
});

test('renders the right content', async () => {
    const {getByText} = render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>);
    expect(getByText(/Add to Menu/i)).toBeInTheDocument();
})