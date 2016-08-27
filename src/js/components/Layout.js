import React from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions/userActions";
import {fetchRepositories} from "../actions/repositoriesActions";
import RepoSearchForm from "./repoSearch/RepoSearchForm";
import RepoList from "./repoSearch/RepoList";
import ErrorMessage from "./common/ErrorMessage";

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
        var retorno = [];
        retorno.push(
            <RepoSearchForm
                changeUserName={this.changeUserName.bind(this)}// @todo o layout não tem que saber do click nem do username
                onClick={this.fetchRepositories.bind(this)}
                buttonText="Load Repos">
            </RepoSearchForm>);
        if (error == null) {
            retorno.push(<RepoList repositories={repositories}></RepoList>)
        }
        else {
            retorno.push(<ErrorMessage error={error} />)
        }
        return (<div>{retorno}</div>)
    }
}