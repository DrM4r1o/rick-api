import './header.css';

import { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import { FavContext } from '../../contexts/FavContext';
import { types } from '../../reducers/storeReducer';
import CharactersFav from "../character-fav/CharactersFav";

function Header() {
    const [isFavsCharactersOpen, setIsFavsCharactersOpen] = useState(false);
    const [setLocalUser, store, dispatch] = useContext(FavContext)
    const { user } = store

    const characterFav = () => setIsFavsCharactersOpen(!isFavsCharactersOpen);

    const resetFavs = () => dispatch({
        type: types.favsAdd,
        payload: []
    })

    const removeUser = () => dispatch({
        type: types.userRemove,
        payload: store.user.id
    })

    function handleLogout() {
        resetFavs()
        removeUser()
    }

    return (
        <>
            <header>
                <div>
                    <h2>Rick And Morty API</h2>
                </div>
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
                            <button onClick={characterFav}>{user.favs.length} 💖</button>
                        </>
                    }
                </nav>
            </header>
            {isFavsCharactersOpen &&
                <CharactersFav />
            }
        </>
    )
}

export default Header;