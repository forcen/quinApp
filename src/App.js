import { QueryClient, QueryClientProvider } from 'react-query';

import { Searcher, Launches } from './components';
import logo from './assets/round_logo.svg';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>Moonshot Calendar Inc.</span>
                </header>
                <Searcher open={false} />
                <Launches />
            </div>
        </QueryClientProvider>
    );
};

export default App;
