import './App.css';

import { useState } from 'react';
import CharacterGrid from './components/character-grid/characterGrid';
import Header from './components/header/header';

function getFavs() {
    return JSON.parse(localStorage.getItem("favs") || "[]")
}

function App() {
    const [favs, setFavs] = useState(getFavs());

    function handleFavs(newFavs) {
        setFavs(newFavs)
    }

    return (
        <>
            <Header favs={favs} handleFavs={handleFavs} />
            <CharacterGrid favs={favs} handleFavs={handleFavs} />
        </>
    )
}

export default App
