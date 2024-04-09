import { useContext } from "react";
import { FavContext } from "../../contexts/FavContext";
import { types } from "../../reducers/storeReducer";

function FavButton({ id, isFav, handleIsFav }) {
    id = Number(id)

    const [setLocalUser, store, dispatch] = useContext(FavContext)
    const { favs } = store.user

    const modifyFavs = (favsFiltered) =>  dispatch({
        type: types.favsAdd,
        payload: favsFiltered
    })

    const handleFav = () => {
        const newIsFav = !isFav
        let favsFiltered = []
    
        handleIsFav(newIsFav); // ASINCRONO
    
        if (newIsFav) {
            favsFiltered = [...favs, id]
        } else {
            favsFiltered = favs.filter((favId) => favId !== id)
        }
        
        modifyFavs(favsFiltered)
        
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