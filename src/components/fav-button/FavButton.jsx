import { useState } from "react";

function FavButton({ id, favs, handleFavs, isFav, handleIsFav }) {

    function handleFav() {
        const newIsFav = !isFav
        let favsFiltered = []

        handleIsFav(newIsFav); // ASINCRONO

        if (newIsFav) {
            favsFiltered = [...favs, id]
            handleFavs(favsFiltered)
        } else {
            favsFiltered = favs.filter((favId) => favId !== id)
            handleFavs(favsFiltered)
        }

        localStorage.setItem("favs", JSON.stringify(favsFiltered))
    }

    return (
        <>
            <div className="fav">
                <button onClick={handleFav}>
                    {isFav ? <p>💖</p> : <p>🤍</p>}
                </button>
            </div>
        </>
    )
}

export default FavButton