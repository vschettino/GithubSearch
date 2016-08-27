import React from "react";
export default class RepoList extends React.Component {

    render() {
        const response = this.props.error.response;
        return (<h1>Ocorreu um ERRO #{response.status}: {response.statusText}</h1>);

    }
}
