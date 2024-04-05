import './header.css'

import { useState } from "react";
import CharactersFav from "../character-fav/CharactersFav";
import { NavLink } from 'react-router-dom';

function Header({ favs, handleFavs }) {
    const [isFavsCharactersOpen, setIsFavsCharactersOpen] = useState(false);

    function characterFav() {
        setIsFavsCharactersOpen(!isFavsCharactersOpen);
    }

    return (
        <>
            <header>
                <div>
                    <h1>Rick And Morty API</h1>
                </div>
                <div className='data-header'>
                    <nav>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/characters"}>Characters</NavLink>
                        <NavLink to={"/characters/favs"}>Favorites</NavLink>
                    </nav>
                    <button onClick={characterFav}>💖{favs.length}</button>
                </div>
            </header>
            {isFavsCharactersOpen &&
                <CharactersFav idCharacters={favs} handleFavs={handleFavs} />
            }
        </>
    )
}

export default Header;