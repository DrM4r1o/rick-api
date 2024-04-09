import { useContext } from "react";
import { FavContext } from "../../contexts/FavContext";
import { types } from "../../reducers/storeReducer";

import uuidAdapter from "../../adapters/plugins/uuid.adapter";

const LoginPage = () => {
    const [setLocalUser, store, dispatch] = useContext(FavContext)
    const { user } = store
    const newUser = {
        id: uuidAdapter(),
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