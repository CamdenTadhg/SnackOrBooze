import {render, screen, act} from '@testing-library/react';
import {test, expect} from 'vitest';
import Home from '../Home';
import App from '../App';




test('renders the Home component', async () => {
    await act(async () => {render(
        <App >
            <Home/>
        </App>
    )});
});

test('it matches snapshot', async () => {
    const home = await act(async () => {render(
        <App>
            <Home/>
        </App>
    )});
    expect(home).toMatchSnapshot
});

test('renders the right content', async () => {
    await act(async () => {render(
        <App >
            <Home/>
        </App>
    )});
    expect(screen.getByText('Snacks: 2')).toBeInTheDocument();
})