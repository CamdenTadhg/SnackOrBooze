import {afterEach, beforeEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

//runs a clean after each test case, clearing jsdom
afterEach(() => {
    cleanup();
});