import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCharacterById } from "../../services/characters.service"

import FavButton from "../fav-button/FavButton"
import { FavContext } from "../../contexts/FavContext"

function CharacterDetails() {
    const [character, setCharacter] = useState()
    const { id } = useParams()
    const [keys, setKeys] = useState([])
    const [isFav, setIsFav] = useState(false)

    const [setLocalUser, store, dispatch] = useContext(FavContext)
    const { favs } = store.favs

    function objectValuesToArray(obj) {
        const keys = Object.keys(obj)
        const values = keys.map((key) => obj[key])

        return values.join("\n")
    }

    useEffect(() => {
        getCharacterById(id).then((data) => {
            setCharacter(data)
            setKeys(Object.keys(data))
            setIsFav(favs.includes(Number(id)))
        })
    }, [id])

    if (character === undefined) {
        return (
            <>
                <p>No existe</p>
            </>
        )
    }

    return (
        <>
            <div style={{ width: "400px" }}>
                <img className="img" src={character.image} style={{ width: "200px" }} />
                <div className="data">
                    {keys.map((key) => {
                        if (key !== "image" && key !== "episode" &&  typeof character[key] !== "object") {
                            return (
                                <p key={key}>
                                    <span>{`${key.toUpperCase()}: `}</span>
                                    <span className={key}>{character[key]}</span>
                                </p>
                            );
                        }
                        if (typeof character[key] === "object") {
                            return (
                                <p key={key}>
                                    <span>{`${key.toUpperCase()}: `}</span>
                                    <span className={key}>{objectValuesToArray(character[key])}</span>
                                </p>
                            )
                        }
                    })}
                </div>
                <FavButton 
                    id={id} 
                    isFav={isFav} 
                    handleIsFav={setIsFav} 
                />
            </div>
        </>
    )
}

export default CharacterDetails