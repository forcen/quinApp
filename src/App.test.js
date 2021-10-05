import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
    const { container } = render(<App />);

    const searchElement = screen.getByText(/Find Launches!/i);
    const mapElement = screen.getByTestId('map');

    expect(searchElement).toBeInTheDocument();
    expect(mapElement).toBeInTheDocument();
});
