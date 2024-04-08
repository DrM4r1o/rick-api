export const types = {
    userAdd: 'USER_ADD',
    userRemove: 'USER_REMOVE',
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