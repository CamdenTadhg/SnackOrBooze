import {render, screen} from '@testing-library/react';
import {expect, test} from 'vitest';
import NotFound from '../NotFound';

test('renders NotFound component', () => {
    render(<NotFound />)
});

test('matches snapshot', () => {
    const notFound = render(<NotFound />);
    expect(notFound).toMatchSnapshot();
});

test('renders the right content', () => {
    render(<NotFound />);

    expect(screen.getByText(/We're sorry./i)).toBeInTheDocument();
})