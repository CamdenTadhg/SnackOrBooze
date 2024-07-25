import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddForm from "../AddForm";

it("renders without crashing", function() {
    render(<AddForm />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<AddForm />);
    expect(asFragment()).toMatchSnapshot();
});

it('displays the correct content', function() {
    const {getByText} = render(<AddForm />)
    expect(getByText('Add A Menu Item', {exact: false})).toBeInTheDocument();
});