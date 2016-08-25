import axios from "axios";

export function fetchRepositories(userName) {
    return function (dispatch) {
        dispatch({
            type: "FETCH_REPOSITORIES",
            payload: axios.get("https://api.github.com/users/" + userName + "/repos")
        })
    }
}

export function addTweet(id, text) {
    return {
        type: 'ADD_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function updateTweet(id, text) {
    return {
        type: 'UPDATE_TWEET',
        payload: {
            id,
            text,
        },
    }
}

export function deleteTweet(id) {
    return {type: 'DELETE_TWEET', payload: id}
}