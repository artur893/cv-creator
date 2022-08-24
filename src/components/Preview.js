import React, { Component } from "react";

export class Preview extends Component {
    render() {
        return (
            <div className="preview">
                <div className="personaldatapreview">
                    <p>First name: <b>{this.props.firstName}</b></p>
                    <p>Last name: <b>{this.props.lastName}</b></p>
                    <p>Birth date: <b>{this.props.birthDate}</b></p>
                    <p>E-mail: <b>{this.props.email}</b></p>
                    <p>Phone number:<b>{this.props.phone}</b></p>
                </div>
                <div className="educationpreview">
                    <h3>Education</h3>
                    <p>School name: <b>{this.props.schoolName}</b></p>
                    <p>Title of study: <b>{this.props.titleOfStudy}</b></p>
                    <div className="dateofstudypreview">Date of study:
                        <p>Start - <b>{this.props.startOfStudy}</b></p>
                        <p>Finish - <b>{this.props.finishOfStudy}</b></p>
                    </div>
                </div>
                <h3>Experience</h3>
                <div className="experiencepreview">
                    <div className="workdata">
                        <p className="companyname">Company name: <b>{this.props.companyName}</b></p>
                        <p>Position title: <b>{this.props.positionTitle}</b></p>
                        <div className="dateofstudypreview">Date of work:
                            <p>Start - <b>{this.props.startOfWork}</b></p>
                            <p>Finish - <b>{this.props.finishOfWork}</b></p>
                        </div>
                    </div>
                    <div className="workdescribtion"><em>{this.props.workDescribtion}</em></div>
                </div>
            </div>)
    }
}