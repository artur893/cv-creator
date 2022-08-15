import React, { Component } from "react";

export class Preview extends Component {
  render() {
        return (
            <div>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.birthDate}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </div>)
    }
}