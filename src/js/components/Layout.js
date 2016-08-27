import React from "react";
import {connect} from "react-redux";
import {fetchUser} from "../actions/userActions";
import {fetchRepositories} from "../actions/repositoriesActions";
import UserSearchForm from "../components/UserSearchForm";

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

    /**
     * @todo concatenar em um array [] os retornos e só retornar no final
     */
    render() {
        const {user, repositories, error} = this.props;
        const mappedRepositories = repositories.map(repo => <li>{repo.name}</li>)
        var retorno = [];
        retorno.push(
            <UserSearchForm
                changeUserName={this.changeUserName.bind(this)}// @todo o layout não tem que saber do click nem do username
                onClick={this.fetchRepositories.bind(this)}
                buttonText="Load Repos">
            </UserSearchForm>);
        if (error == null) {
            retorno.push(<ul>{mappedRepositories}</ul>);
            console.log('passei aqui', retorno);
        }
        else {
            retorno.push(<h1>Ocorreu um ERRO #{error.response.status}: {error.message}</h1>)
        }
        return (<div>{retorno}</div>)
    }
}