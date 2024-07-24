import React from 'react';
import {render} from '@testing-library/react';
import MenuItem from "../MenuItem";

it("renders without crashing", function() {
    render(<MenuItem />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<MenuItem />);
    expect(asFragment()).toMatchSnapshot();
});