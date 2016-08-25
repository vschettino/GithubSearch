export default function reducer(state={
    repositories: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_REPOSITORIES": {
            return {...state, fetching: true}
        }
        case "FETCH_REPOSITORIES_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_REPOSITORIES_FULFILLED": {
            console.log("ação agora: ", action);
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                repositories: action.payload.data,
            }
        }
        case "ADD_REPOSITORIES": {
            return {
                ...state,
                repositories: [...state.repositories, action.payload],
            }
        }
        case "UPDATE_REPOSITORIES": {
            const { id, text } = action.payload
            const newRepositories = [...state.repositories]
            const tweetToUpdate = newRepositories.findIndex(tweet => tweet.id === id)
            newRepositories[tweetToUpdate] = action.payload;

            return {
                ...state,
                repositories: newRepositories,
            }
        }
        case "DELETE_REPOSITORIES": {
            return {
                ...state,
                repositories: state.repositories.filter(tweet => tweet.id !== action.payload),
            }
        }
    }

    return state
}