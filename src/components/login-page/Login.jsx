import { useContext, useState } from "react"
import { FavContext } from "../../contexts/FavContext"
import { types } from "../../reducers/storeReducer"

import { v4 as uuidv4 } from 'uuid';

//uuid -> libreria de terceros muy popular para crear Ids

const LoginPage = () => {
    const [favs, setFavs, setLocalUser, store, dispatch] = useContext(FavContext)
    const user = { 
        id: uuidv4(), 
        name: "",
        favs: []
    }

    const handleInputChange = (event) => {
        user.name = event.target.value
    }

    const handleUserAdd = () => dispatch({
        type: types.userAdd,
        payload: user
    })
    
    const handleUserRemove = () => dispatch({
        type: types.userRemove,
        payload: store.user.id
    })
    
    return (
        <>
            <h3>Add users form</h3>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" onChange={handleInputChange} />
                <button onClick={handleUserAdd}>Send</button>
            </div>
            {store.user.id &&
                <div>
                    <h2>All users</h2>
                    <div key={store.user.id}>
                        <p>ID: {store.user.id} - Name: {store.user.name} </p>
                        <button onClick={handleUserRemove}>Delete</button>
                    </div>
                </div>
            }
        </>
    )
}

export default LoginPage