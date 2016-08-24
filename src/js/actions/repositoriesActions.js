import axios from "axios";

export function fetchRepositories(userName) {
    console.log(userName);
    return function(dispatch) {
        dispatch({type:"FETCH_REPOSITORIES", payload:  axios.get("https://api.github.com/users/"+userName+"/repos")})
        // axios.get("https://api.github.com/users/"+userName+"/repos")
        //     .then((response) => {
        //         dispatch({type: "FETCH_REPOSITORIES_FULFILLED", payload: response.data})
        //     })
        //     .catch((err) => {
        //         dispatch({type: "FETCH_REPOSITORIES_REJECTED", payload: err})
        //     })
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
    return { type: 'DELETE_TWEET', payload: id}
}