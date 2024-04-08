import './App.css';

import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import FavProvider from './contexts/FavContext';

function App() {
    return (
        <FavProvider>
            <Header />
            <Outlet />
        </FavProvider>
    )
}

export default App
