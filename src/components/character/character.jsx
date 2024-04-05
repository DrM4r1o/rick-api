import "./character.css";
import { useState, useEffect } from "react";
import { getCharacterById } from "../../services/characters.service"
import { Link, useNavigate } from "react-router-dom";

function Character({ character, favs, handleFavs }) {
    const [isFav, setIsFav] = useState(character.isFav);
    const navigate = useNavigate()
    const keys = Object.keys(character);

    function handleFav() {
        const newIsFav = !isFav
        let favsFiltered = []

        setIsFav(newIsFav); // ASINCRONO

        if (newIsFav) {
            favsFiltered = [...favs, character.id]
            handleFavs(favsFiltered)
        } else {
            favsFiltered = favs.filter((favId) => favId !== character.id)
            handleFavs(favsFiltered)
        }

        localStorage.setItem("favs", JSON.stringify(favsFiltered))
    }

    useEffect(() => {
        setIsFav(favs.includes(character.id))
    }, [favs])

    // function handleClickCharacter() {
    //     navigate(`/character/${character.id}`)
    //     // getCharacterById(character.id).then((data) => {
    //     //     console.log(data);
    //     // })
    // }

    return (
        <div className="character">
            <img className="img" src={character.image} />
            <div className="data">
                {keys.map((key) => {
                    if (key !== "image" && key !== "isFav") {
                        return (
                            <p key={key}>
                                <span>{`${key.toUpperCase()}: `}</span>
                                <span className={key}>{character[key]}</span>
                            </p>
                        );
                    }
                })}
            </div>
            <div className="fav">
                <button onClick={handleFav}>
                    {isFav ? <p>💖</p> : <p>🤍</p>}
                </button>
                <Link to={`/characters/${character.id}`}>Details</Link>
            </div>
        </div>
    );
}

export default Character;
