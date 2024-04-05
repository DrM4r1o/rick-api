import { createContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const FavContext = createContext()



function FavProvider({ children }) {
    const [getLocalFavs, setLocalFavs] = useLocalStorage('favs')
    const [favs, setFavs] = useState(getLocalFavs())

    return (
        <FavContext.Provider value={[favs, setFavs]}>
            {children}
        </FavContext.Provider>
    )
}

export default FavProvider