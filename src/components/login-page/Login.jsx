import { useContext } from "react";
import { FavContext } from "../../contexts/FavContext";
import { types } from "../../reducers/storeReducer";

import { v4 as uuidv4 } from 'uuid';

//uuid -> libreria de terceros muy popular para crear Ids

const LoginPage = () => {
    const [setLocalUser, store, dispatch] = useContext(FavContext)
    const { user } = store
    const newUser = {
        id: uuidv4(),
        name: "",
        favs: []
    }

    const handleInputChange = (event) => {
        newUser.name = event.target.value
    }

    const handleUserAdd = () => dispatch({
        type: types.userFind,
        payload: newUser
    })

    const handleUserRemove = () => dispatch({
        type: types.userRemove,
        payload: user.id
    })

    return (
        <>
            <h3>Login</h3>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" onChange={handleInputChange} />
                <button onClick={handleUserAdd}>Send</button>
            </div>
            {user.id &&
                <div>
                    <h2>All users</h2>
                    <div key={user.id}>
                        <p>ID: {user.id} - Name: {user.name} </p>
                        <button onClick={handleUserRemove}>Delete</button>
                    </div>
                </div>
            }
        </>
    )
}

export default LoginPage