import {render, screen, waitFor, act} from '@testing-library/react';
import {expect, test} from 'vitest';
import NavBar from '../NavBar';
import App from '../App';

test('renders the NavBar component', () => {
    render(
        <App>
            <NavBar />
        </App>
    );
});

test('matches snapshot', () => {
    const navBar = render(
        <App>
            <NavBar />
        </App>
    );
    expect(navBar).toMatchSnapshot();
});

test('renders the right content', async () => {
    await act(async () => {
        render(
            <App>
                <NavBar />
            </App>
        );
    })

    expect(screen.getByText(/Add to Menu/i)).toBeInTheDocument();
})