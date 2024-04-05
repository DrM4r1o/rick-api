import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCharacterById } from "../../services/characters.service"

function CharacterDetails() {
    const [character, setCharacter] = useState()
    const { id } = useParams()
    const [keys, setKeys] = useState([])
    const [episodes, setEpisodes] = useState([])

    function objectValuesToArray(obj) {
        const keys = Object.keys(obj)
        const values = keys.map((key) => obj[key])

        return values.join("\n")
    }

    useEffect(() => {
        getCharacterById(id).then((data) => {
            setCharacter(data)
            setKeys(Object.keys(data))
            setEpisodes(data.episode)
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
                                    {console.log(character[key])}
                                    <span>{`${key.toUpperCase()}: `}</span>
                                    <span className={key}>{objectValuesToArray(character[key])}</span>
                                </p>
                            )
                        }
                    })}
                </div>
                {/* <div className="fav">
                    <button onClick={handleFav}>
                        {isFav ? <p>💖</p> : <p>🤍</p>}
                    </button>
                </div> */}
            </div>
        </>
    )
}

export default CharacterDetails