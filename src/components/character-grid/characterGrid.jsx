import "./characterGrid.css";

import { useContext, useEffect, useState } from "react";
import charactersAdapter from "../../adapters/models/characters.adapter";
import { getAllCharacters, getAllCharactersAwait, getAllCharactersByName } from "../../services/characters.service";
import { FavContext } from "../../contexts/FavContext";

import Character from "../character/character";
import Filter from "../filter/Filter";
import Loader from "../loader/Loader";
import Pager from "../pager/pager";

function CharacterGrid() {
    const [characterFiltered, setCharacterFiltered] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);
    const [filterText, setFiterText] = useState("")

    const [, store] = useContext(FavContext)
    const { favs } = store.user

    useEffect(() => {
        let delayedGetdData;
        setIsLoading(true);

        if (filterText !== "") {
            delayedGetdData = setTimeout(() => {
                getAllCharactersByName(filterText, page)
                    .then((data) => {
                        buildCharacters(data.results, favs);
                        setLastPage(data.info.pages);
                    })
                    .catch(err => console.error(err))
                    .finally(() => setIsLoading(false))
            }, 500);
        } else {
            getAllCharactersAwait(page)
                .then((data) => {
                    buildCharacters(data.results, favs);
                    setLastPage(data.info.pages);
                })
                .catch(err => console.error(err))
                .finally(() => setIsLoading(false))
        }

        return () => {
            clearTimeout(delayedGetdData)
            //function de limpieza (cleanup)
        };
    }, [page, filterText]);

    // useEffect
    // Siempre se ejecuta al menos una vez
    // Se ejecuta luego de renderizar la vista
    // Segundo parametro - Array de dependencias (puede ser)
    // useEffect( ()=>{} ) -> Se ejecutará la callbackFunction tras cada renderizado
    // useEffect( ()=>{}, [] ) -> Se ejecutará la callbackFunction solo la primera vez que se monte el componente
    // useEffect( ()=>{}, [depA, depB] ) -> Si en el ciclo de vida del componente alguna dependecia cambia, Se ejecutará la callbackFunction

    function buildCharacters(originCharacters, favs) {
        const mappedCharacters = charactersAdapter(originCharacters, favs);
        setCharacterFiltered(mappedCharacters);
    }

    function handleFilter(inputText) {
        setFiterText(inputText)
        setPage(1)
    }

    function handlePage(pageNumber) {
        setPage(pageNumber);
    }

    return (
        <>
            <Filter handleFilter={handleFilter} />
            {isLoading && <Loader />}
            <div className="character-grid">
                {characterFiltered.map((character) => (
                    <Character
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>
            <Pager
                page={page}
                lastPage={lastPage}
                handlePage={handlePage}
            />
        </>
    );
}

export default CharacterGrid;
