import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddForm from "../AddForm";
import SnackOrBoozeApi from '../Api';

jest.mock(SnackOrBoozeApi);

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

it('gathers and submits form data', function() {
    const {getByText, getByPlaceholderText} = render(<AddForm />);
    fireEvent.change(getByPlaceholderText('id'), {target: {value: 'chips'}});
    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Chips'}});
    fireEvent.change(getByPlaceholderText('description'), {target: {value: 'test description'}});
    fireEvent.change(getByPlaceholderText('recipe'), {target: {value: 'test recipe'}});
    fireEvent.change(getByPlaceholderText('serve'), {target: {value: 'test serve'}});
    fireEvent.click(getByText('Add'));

    expect(SnackOrBoozeApi.addGoodies).toHaveBeenCalledWith('snacks', {
        id: 'chips',
        name: 'Chips',
        description: 'test description', 
        recipe: 'test recipe', 
        serve: 'test serve'
    });
    expect(SnackOrBoozeApi.getGoodies).toHaveBeenNthCalledWith(1, 'snacks');
    expect(SnackOrBoozeApi.getGoodies).toHaveBeenNthCalledWith(2, 'drinks');
    expect(getByPlaceholderText('id').val()).toEqual('');
})