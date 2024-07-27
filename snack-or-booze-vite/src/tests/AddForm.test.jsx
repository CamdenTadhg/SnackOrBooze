import React from 'react';
import {render, fireEvent, findByPlaceholderText, waitFor} from '@testing-library/react';
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

test('gathers and submits form data', async function() {
    const spyAdd = vi.spyOn(SnackOrBoozeApi, 'addGoodies');
    const spyGet = vi.spyOn(SnackOrBoozeApi, 'getGoodies');
    const setSnacks = vi.fn();
    const setDrinks = vi.fn();
    const {getByText, getByPlaceholderText} = render(<AddForm setSnacks={setSnacks} setDrinks={setDrinks}/>);
    fireEvent.change(getByPlaceholderText('id'), {target: {value: 'chips'}});
    fireEvent.change(getByPlaceholderText('name'), {target: {value: 'Chips'}});
    fireEvent.change(getByPlaceholderText('description'), {target: {value: 'test description'}});
    fireEvent.change(getByPlaceholderText('recipe'), {target: {value: 'test recipe'}});
    fireEvent.change(getByPlaceholderText('serve'), {target: {value: 'test serve'}});
    fireEvent.click(getByText('Add'));

    await waitFor(() => {
    expect(SnackOrBoozeApi.addGoodies).toHaveBeenCalledWith('snacks',{
        id: 'chips',
        name: 'Chips',
        description: 'test description', 
        recipe: 'test recipe', 
        serve: 'test serve'
    });
})

    await waitFor(() => {expect(SnackOrBoozeApi.getGoodies).toHaveBeenNthCalledWith(1, 'snacks')});
    await waitFor(() => {expect(SnackOrBoozeApi.getGoodies).toHaveBeenNthCalledWith(2, 'drinks')});
    expect(setSnacks).toHaveBeenCalled();
    expect(setDrinks).toHaveBeenCalled();
    const idInput = getByPlaceholderText('id')
    expect(idInput.value).toEqual('');
})