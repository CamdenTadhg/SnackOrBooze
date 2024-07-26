import React from 'react';
import {render, fireEvent, findByPlaceholderText} from '@testing-library/react';
import {test, expect, vi} from 'vitest';
import AddForm from '../AddForm';
import SnackOrBoozeApi from '../Api';

vi.doMock('SnackOrBoozeApi');

test('renders the AddForm component', () => {
    render(<AddForm />);
});

test('matches snapshot', function() {
    const addForm = render(<AddForm />);
    expect(addForm).toMatchSnapshot();
});

test('displays correct content', function() {
    const {getByText} = render(<AddForm />);
    expect(getByText('Add A Menu Item')).toBeInTheDocument();
});

test('gathers and submits form data', function() {
    const spyAdd = vi.spyOn(SnackOrBoozeApi, 'addGoodies');
    const spyGet = vi.spyOn(SnackOrBoozeApi, 'getGoodies');
    const {getByText, getByPlaceholderText} = render(<AddForm />);
    fireEvent.change(getByPlaceholderText('id'), {target: {value: 'chips'}});
    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Chips'}});
    fireEvent.change(getByPlaceholderText('description'), {target: {value: 'test description'}});
    fireEvent.change(getByPlaceholderText('recipe'), {target: {value: 'test recipe'}});
    fireEvent.change(getByPlaceholderText('serve'), {target: {value: 'test serve'}});
    fireEvent.click(getByText('Add'));

    expect(SnackOrBoozeApi.addGoodies).toHaveBeenCalledWith('snacks',{
        id: 'chips',
        name: 'Chips',
        description: 'test description', 
        recipe: 'test recipe', 
        serve: 'test serve'
    });

    expect(SnackOrBoozeApi.getGoodies).toHaveBeenNthCalledWith(1, 'snacks');
    expect(SnackOrBoozeApi.getGoodies).toHaveBeenNthCalledWith(2, 'drinks');
    const idInput = getByPlaceholderText('id')
    expect(idInput.value).toEqual('');
})