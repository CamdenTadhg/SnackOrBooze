import {render} from '@testing-library/react';
import {test, expect, vi} from 'vitest';
import AddForm from '../AddForm';
import SnackOrBoozeApi from '../Api';

vi.mock(SnackOrBoozeApi);
const [snacks, setSnacks] = useState([]);
const [drinks, setDrinks] = useState([]);

test('renders the AddForm component', () => {
    render(<AddForm setSnacks={setSnacks} setDrinks={setDrinks}/>);
});

test('matches snapshot', function() {
    const addForm = render(<AddForm setSnacks={setSnacks} setDrinks={setDrinks}/>);
    expect(addForm).toMatchSnapshot();
});

test('displays correct content', function() {
    const {getByText} = render(<AddForm setSnacks={setSnacks} setDrinks={setDrinks}/>);
    expect(getByText('Add A Menu Item')).toBeInTheDocument();
});

test('gathers and submits form data', function() {
    const {getByText, getByPlaceholderText} = render(<AddForm setSnacks={setSnacks} setDrinks={setDrinks}/>);
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
    expect(getByPlaceholderText('id').val()).toEqual('');
})