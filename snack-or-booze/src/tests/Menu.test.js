import React from 'react';
import {render} from '@testing-library/react';
import Menu from "../Menu";

it("renders without crashing", function() {
    render(<Menu />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Menu />);
    expect(asFragment()).toMatchSnapshot();
});