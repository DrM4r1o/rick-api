import { API_URL } from "../utils";
// import { API_URL } from "../utils/constants.util";

export function getAllCharacters(page = 1) {
    return fetch(`${API_URL}?page=${page}`)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("No se ha podido completar");
            }
        })
        .then((data) => {
            if (data.results) {
                return data;
            } else {
                console.error("no se ha encontrado");
            }
        })
        .catch(() => {
            console.log("No existe el dominio");
        })
}

export async function getAllCharactersAwait(page = 1) {
    try {
        const response = await fetch(`${API_URL}?page=${page}`)
        const data = await response.json()
        
        if (!response.ok || !data.results) {
            throw new Error("Error during request");
        }

        return data
    } catch (error) {
        console.error(error);
    }
}

export function getAllCharactersByName(name, page = 1) {
    return fetch(`${API_URL}/?page=${page}&name=${name}`)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("No se ha podido completar");
            }
        })
        .then((data) => {
            if (data.results) {
                return data;
            } else {
                console.error("no se ha encontrado");
            }
        })
        .catch(() => {
            console.log("No existe el dominio");
        })
}

export function getCharacterById(idCharacter) { 
    return fetch(`${API_URL}/${idCharacter}`)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("No se ha podido completar");
            }
        })
        .then((data) => {
            if (data) {
                return data;
            } else {
                console.error("no se ha encontrado");
            }
        })
        .catch(() => {
            console.log("No existe el dominio");
        })
}

export function getMultipleCharactersById(ids) {

    if(ids.length === 0) return Promise.resolve([]);

    return fetch(`${API_URL}/${JSON.stringify(ids)}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data;
        })

}

const first = () => { }

export default first

