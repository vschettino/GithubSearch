import React from "react";
export default class UserSearchForm extends React.Component {

    handleInputChange(e) {
        this.props.changeUserName(e)
    }

    handleButonClick() {
        this.props.onClick()
    }

    render() {
        return (<div>
            <input onChange={this.handleInputChange.bind(this)}/>
            <button onClick={this.handleButonClick.bind(this)}>{this.props.buttonText}</button>
        </div>)

    }
}
