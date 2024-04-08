import { createContext, useEffect, useReducer, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import storeReducer, { initialStore } from '../reducers/storeReducer'

export const FavContext = createContext()

function FavProvider({ children }) {

    const [store, dispatch] = useReducer(storeReducer, initialStore)
    const [getLocalUser, setLocalUser, userLocal] = useLocalStorage(`user${store.user.id}`)
    const [favs, setFavs] = useState()

    useEffect(() => {
        setLocalUser(store.user)
    }, [])

    useEffect(() => {
        setFavs(userLocal.favs)
    }, [userLocal])
    
    return (
        <>
            {favs &&
                <FavContext.Provider value={[favs, setFavs, setLocalUser, store, dispatch]}>
                    {children}
                </FavContext.Provider>
            }
        </>
    )
}

export default FavProvider