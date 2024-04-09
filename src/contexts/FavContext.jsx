import { createContext, useEffect, useReducer, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import storeReducer, { initialStore } from '../reducers/storeReducer'

export const FavContext = createContext()

function FavProvider({ children }) {

    const [store, dispatch] = useReducer(storeReducer, initialStore)
    const [setLocalUser, userLocal] = useLocalStorage(`user${store.user.id}`)
    const [favs, setFavs] = useState()

    useEffect(() => {
        setLocalUser(store.user)
    }, [])

    useEffect(() => {
        setFavs(userLocal.favs)
    }, [userLocal])

    useEffect(() => {
        setFavs(store.user.favs)
    }, [store.user.favs])

    return (
        <>
            {favs &&
                <FavContext.Provider value={[setLocalUser, store, dispatch]}>
                    {children}
                </FavContext.Provider>
            }
        </>
    )
}

export default FavProvider