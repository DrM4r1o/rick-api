
export const types = {
    userAdd: 'USER_ADD',
    userRemove: 'USER_REMOVE',
    userFind: 'USER_FIND',
    favsGet: 'FAVS_GET',
    favsAdd: 'FAVS_ADD',
    favsRemove: 'FAVS_REMOVE',
}

export const initialStore = {
    user: {
        id: 0,
        name: "Guest",
        favs: [],
    }
}

const findUser = (username) => {
    const users = []

    for(const user in localStorage) {
        if(user.includes("user")) {
            const userFinded = JSON.parse(localStorage.getItem(user))
            users.push(userFinded)
        }
    }

    return users.filter(user => user.name.toUpperCase() === username.toUpperCase())[0]
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.userAdd:
            return {
                ...state,
                user: action.payload
            }
        case types.userRemove:
            return {
                ...state,
                user: {
                    favs: [],
                }
            }
        case types.userFind:
            return {
                ...state,
                user: findUser(action.payload.name) ?? action.payload
            }
        case types.favsAdd:
            return {
                ...state,
                user: {
                    ...state.user,
                    favs: action.payload,
                }
            }
        case types.favsRemove:
            return {
                ...state,
                user: {
                    ...state.user,
                    favs: state.user.favs.filter(favs => favs.id !== action.payload),
                }
            }
        default:
            return state
    }
}

export default storeReducer