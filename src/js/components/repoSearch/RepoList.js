import React from "react";
export default class RepoList extends React.Component {

    render() {
        return (<ul>{this.props.repositories.map(repo => <li>{repo.name}</li>)}</ul>);

    }
}
