import {render} from '@testing-library/react';
import {test} from 'vitest';
import AddForm from '../AddForm';

test('renders the AddForm component', () => {
    render(<AddForm/>);
});