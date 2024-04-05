import { createContext, useState } from 'react'

export const FavContext = createContext()

function getFavs() {
    return JSON.parse(localStorage.getItem("favs") || "[]")
}

function FavProvider({children}) {
    const [favs, setFavs] = useState(getFavs());
    return (
        <FavContext.Provider value={[favs, setFavs]}>
            {children}
        </FavContext.Provider>
    )
}

export default FavProvider