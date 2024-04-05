import { useOutletContext } from "react-router-dom"

import CharactersFav from "../character-fav/CharactersFav"

function FavsPage() {
    const [favs, handleFavs] = useOutletContext()

    return (
        <>
            <CharactersFav idCharacters={favs} handleFavs={handleFavs} />
        </>
    )
}

export default FavsPage