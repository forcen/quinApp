import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Launches from './Launches';

// For testing this I need to provide a QueryClientProvider mockup and 
// then check for valid replies, no replies, etc.

describe('Launches', () => {
    it('renders', () => {
        const { container } = render(<Launches />);

        expect(container).toMatchInlineSnapshot();
    });
});
