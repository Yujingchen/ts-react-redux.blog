import { Provider } from 'react-redux';
import { store } from '../store/index';
import RepositoriesList from './RepositoriesList'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search for a Packages</h1>
                <RepositoriesList />
            </div>
        </Provider>
    )
}

export default App
