import React, { Component } from "react";

export class Preview extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.props.birthDate}</p>
            </div>)
    }
}