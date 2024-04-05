import './CharactersFav.css'

import { useState, useEffect, useContext } from "react";
import { getMultipleCharactersById } from "../../services/characters.service";
import charactersAdapter from "../../adapters/models/characters.adapter";
import { FavContext } from '../../contexts/FavContext';

import Character from "../character/character";

function CharactersFav() {

    const [characterFavs, setCharacterFavs] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [bgColor, setBgColor] = useState("tomato")
    const [favs] = useContext(FavContext)

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

        getMultipleCharactersById(favs)
            .then(data => {
                const mappedCharacters = charactersAdapter(data, data.map((character) => character.id))
                setCharacterFavs(mappedCharacters)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [favs])

    if(characterFavs.length > 0) {
        return (
            <>
            <div className="grid" style={{ background: bgColor }}>
                {characterFavs.map((character) => (
                    <Character 
                        key={character.id} 
                        character={character}
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

export default CharactersFav;