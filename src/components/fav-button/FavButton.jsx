import { useContext, useState } from "react";
import { FavContext } from "../../contexts/FavContext";
import useLocalStorage from "../../hooks/useLocalStorage";

function FavButton({ id, isFav, handleIsFav }) {
    id = Number(id)

    const [favs, setFavs, setLocalUser, store, dispatch] = useContext(FavContext)

    function handleFav() {
        const newIsFav = !isFav
        let favsFiltered = []

        handleIsFav(newIsFav); // ASINCRONO

        if (newIsFav) {
            favsFiltered = [...favs, id]
            setFavs(favsFiltered)
        } else {
            favsFiltered = favs.filter((favId) => favId !== id)
            setFavs(favsFiltered)
        }
        
        setLocalUser({
            ...store.user,
            favs: favsFiltered
        })
    }

    return (
        <div className="fav">
            <button onClick={handleFav}>
                {isFav ? <p>💖</p> : <p>🤍</p>}
            </button>
        </div>
    )
}

export default FavButton