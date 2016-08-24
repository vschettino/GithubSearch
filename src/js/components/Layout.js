import React from "react"
import {connect} from "react-redux"

import {fetchUser} from "../actions/userActions"
import {fetchRepositories} from "../actions/repositoriesActions"

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        repositories: store.repositories.repositories,
        error: store.repositories.error
    };
})
export default class Layout extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchUser())
    }

    fetchRepositories() {
        this.props.dispatch(fetchRepositories(this.state.userName))
    }

    changeUserName(e) {
        var userName = e.target.value
        this.setState({userName});

    }

    render() {
        const {user, repositories, error} = this.props;
        const mappedRepositories = repositories.map(repo => <li>{repo.name}</li>)
        if (error == null) {
            return ( <div>
                <input onChange={this.changeUserName.bind(this)}/>
                <button onClick={this.fetchRepositories.bind(this)}>load repos</button>
                <h1>{user.name}</h1>
                <ul>{mappedRepositories}</ul>
            </div>)
        }
        return ( <div>
            <input onChange={this.changeUserName.bind(this)}/>
            <button onClick={this.fetchRepositories.bind(this)}>load repos</button>
            <h1>Ocorreu um ERRO #{error.response.status}: {error.message}</h1>

        </div>)

    }
}