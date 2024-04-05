import './header.css'

import { useContext, useState } from "react";
import CharactersFav from "../character-fav/CharactersFav";
import { NavLink } from 'react-router-dom';
import { FavContext } from '../../contexts/FavContext';

function Header() {
    const [isFavsCharactersOpen, setIsFavsCharactersOpen] = useState(false);
    const [favs] = useContext(FavContext)

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
                <CharactersFav/>
            }
        </>
    )
}

export default Header;