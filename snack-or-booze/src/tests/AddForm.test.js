import React from 'react';
import {render} from '@testing-library/react';
import AddForm from "../AddForm";

it("renders without crashing", function() {
    render(<AddForm />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<AddForm />);
    expect(asFragment()).toMatchSnapshot();
});