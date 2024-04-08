import './header.css'

import { useContext, useEffect, useState } from "react";
import CharactersFav from "../character-fav/CharactersFav";
import { NavLink } from 'react-router-dom';
import { FavContext } from '../../contexts/FavContext';
import { types } from '../../reducers/storeReducer';

function Header() {
    const [isFavsCharactersOpen, setIsFavsCharactersOpen] = useState(false);
    const [favs, setFavs, setLocalUser, store, dispatch] = useContext(FavContext)
    const { user } = store

    function characterFav() {
        setIsFavsCharactersOpen(!isFavsCharactersOpen);
    }

    function handleLogout() {
        setFavs([])
        dispatch({
            type: types.userRemove,
            payload: store.user.id
        })
    }

    return (
        <>
            <header>
                <div>
                    <h2>Rick And Morty API</h2>
                </div>
                <div className='data-header'>
                    <nav>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/characters"}>Characters</NavLink>
                        <NavLink to={"/characters/favs"}>Favorites</NavLink>
                        {
                            !user.name &&
                            <NavLink to={"/login"}>Login</NavLink>
                        }
                        {
                            user.name &&
                            <>
                                <p>{user.name} 🧔</p>
                                <NavLink onClick={() => handleLogout()}>Logout</NavLink>
                                <button onClick={characterFav}>{favs.length} 💖</button>
                            </>
                        }
                    </nav>
                </div>
            </header>
            {isFavsCharactersOpen &&
                <CharactersFav />
            }
        </>
    )
}

export default Header;