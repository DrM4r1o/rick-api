import useLocalStorage from "../hooks/useLocalStorage"

export const types = {
    userAdd: 'USER_ADD',
    userRemove: 'USER_REMOVE',
    userFind: 'USER_FIND',
    favsAdd: 'FAVS_ADD',
    favsRemove: 'FAVS_REMOVE',
    getLocalUser: 'GET_LOCAL_USER'
}

export const initialStore = {
    user: {
        id: 0,
        name: "Guest",
        favs: [],
    }
}

// const findUser = (newUserName) => {
//     let newUser

//     for(const user in localStorage) {
//         if(user.includes("user")) {
//             const userFinded = JSON.parse(localStorage.getItem(user))
//             newUser = userFinded.name === newUserName ? userFinded : null
//         }
//     }

//     return newUser
// }

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
            return 
        case types.favsGet:
            return {
                ...state,
                user: {
                    ...state.user,
                    favs: getLocalUser().favs
                }
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