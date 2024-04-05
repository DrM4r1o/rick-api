import { useState } from "react";

function Filter({ handleFilter }) {
    const [filterText, setFilterText] = useState();

    function onChangeText(event) {
        const { value } = event.target;
        const cleared = value.trim();
        setFilterText(cleared);
        handleFilter(cleared)
    }

    return (
        <>
            <input type="text" onChange={(evt) => onChangeText(evt)}></input>
            <button onClick={() => handleFilter(filterText)}>Filtrar</button>
        </>
    )
}

export default Filter