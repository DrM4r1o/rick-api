import "./character.css";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../../contexts/FavContext";

import FavButton from "../fav-button/FavButton";

function Character({ character }) {
    const [isFav, setIsFav] = useState(character.isFav)
    const keys = Object.keys(character)

    const [setLocalUser, store, dispatch] = useContext(FavContext)
    const { favs } = store.user

    useEffect(() => {
        setIsFav(favs.includes(character.id))
    }, [favs])

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
            <FavButton id={character.id} isFav={isFav} handleIsFav={setIsFav} />
            <Link to={`/characters/${character.id}`}>Details</Link>
        </div>
    );
}

export default Character;
