import React from 'react';
import {render} from '@testing-library/react';
import NavBar from "../NavBar";
import {MemoryRouter} from 'react-router-dom';

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>);
});

it("matches snapshot", function() {
    const {asFragment} = render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});

it('displays the correct content', function() {
    const {getByText} = render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>);
    expect(getByText('Snack or Booze', {exact: false})).toBeInTheDocument();
})