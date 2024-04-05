import './App.css';

import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import FavProvider from './contexts/FavContext';



function App() {
    
    return (
        <FavProvider>
            <Header/>
            <Outlet/>
            {/* <CharacterGrid favs={favs} handleFavs={handleFavs} /> */}
        </FavProvider>
    )
}

export default App
