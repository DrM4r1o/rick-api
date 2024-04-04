import './CharactersFav.css'

import { useState, useEffect } from "react";
import { getMultipleCharactersById } from "../../services/characters.service";
import charactersAdapter from "../../adapters/models/characters.adapter";

import Character from "../character/character";

function CharacterFav({ idCharacters, handleFavs }) {

    const [characterFavs, setCharacterFavs] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [bgColor, setBgColor] = useState("tomato")

    // useEffect(() => {
    //     const onMouseMove = (event) => {
    //         if(event.clientX < window.innerWidth / 2) {
    //             setBgColor("tomato")
    //         } else {
    //             setBgColor("limegreen")
    //         }

    //         // console.log(event.clientX);
    //     }

    //     window.addEventListener("mousemove", onMouseMove)

    //     return () => {
    //         window.removeEventListener("mousemove", onMouseMove)
    //     }
    // }, [])


    useEffect(() => {
        setIsLoading(true)

        getMultipleCharactersById(idCharacters)
            .then(data => {
                const mappedCharacters = charactersAdapter(data, data.map((character) => character.id))
                setCharacterFavs(mappedCharacters)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [idCharacters])

    if(characterFavs.length > 0) {
        return (
            <>
            <div className="grid" style={{ background: bgColor }}>
                {characterFavs.map((character) => (
                    <Character 
                        key={character.id} 
                        character={character} 
                        favs={idCharacters} 
                        handleFavs={handleFavs} 
                    />
                ))}
            </div>
            </>
        )
    }

    return (
        <p>
            { isLoading ? "LOADING..." : "THERE IS NO CHARACTERS SAVED" }
        </p>
    )
}

export default CharacterFav;