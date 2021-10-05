import { fireEvent, render, screen } from '@testing-library/react';
import Searcher from './Searcher';

describe('Searcher', () => {
    it('renders', () => {
        const { container } = render(<Searcher defaultOpen={true} />);

        expect(container).toMatchInlineSnapshot(`
            <div>
              <details>
                <summary
                  class="summary"
                >
                  <span
                    class="title"
                  >
                    Find Launches!
                  </span>
                </summary>
                <form>
                  <label>
                    From: 
                    <input
                      type="date"
                    />
                  </label>
                  <label>
                    To: 
                    <input
                      type="date"
                    />
                  </label>
                  <button>
                    Search
                  </button>
                </form>
              </details>
            </div>
        `);

        const linkElement = screen.getByText(/Find Launches/i);

        expect(linkElement).toBeInTheDocument();
    });

    it('should toggle searcher', () => {
        render(<Searcher defaultOpen={false} />);

        const details = screen.getByRole('group');
        const summary = details.querySelector('summary');

        expect(details.open).toBe(false);

        fireEvent.click(summary);
        expect(details.open).toBe(true);
    });
});
