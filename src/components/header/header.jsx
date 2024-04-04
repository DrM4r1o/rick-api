import './header.css'

import { useState } from "react";
import CharacterFav from "../character-fav/CharactersFav";

function Header({ favs, handleFavs }) {
    const [isFavsCharactersOpen, setIsFavsCharactersOpen] = useState(false);

    function characterFav() {
        setIsFavsCharactersOpen(!isFavsCharactersOpen);
    }

    return (
        <>
            <h1>Rick And Morty API</h1>
            <button onClick={characterFav}>💖{favs.length}</button>
            {isFavsCharactersOpen && 
                <CharacterFav idCharacters={favs} handleFavs={handleFavs} />
            }
        </>
    )
}
export default Header;