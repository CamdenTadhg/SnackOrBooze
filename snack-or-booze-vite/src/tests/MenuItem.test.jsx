import {render} from '@testing-library/react';
import {test} from 'vitest';
import MenuItem from '../MenuItem';
import App from '../App';

test('renders the MenuItem component', () => {
    const items = [
        {
            "id": "nachos",
            "name": "Nachos",
            "description": "An American classic!",
            "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
            "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
          },
          {
            "id": "hummus",
            "name": "Hummus",
            "description": "Sure to impress your vegan friends!",
            "recipe": "Purchase one container of hummus.",
            "serve": "Place unceremoniously on the table, along with pita bread."
          },
    ]
    render(
        <App >
            <MenuItem items={items}/>
        </App>
    );
})