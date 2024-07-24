import {render} from '@testing-library/react';
import {test, expect} from 'vitest';
import AddForm from '../AddForm';

test('renders the AddForm component', () => {
    render(<AddForm/>);
});

test('matches snapshot', function() {
    const addForm = render(<AddForm />);
    expect(addForm).toMatchSnapshot();
});