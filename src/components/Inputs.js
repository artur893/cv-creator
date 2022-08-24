import React, { Component } from "react";

export class InputsPersonalData extends Component {
    render() {
        return (
            <div className="personalinputs">
                <h2>Personal data</h2>
                <input placeholder="First name" onChange={this.props.firstName}></input>
                <input placeholder="Last name" onChange={this.props.lastName}></input>
                <input placeholder="Date of birth" type='date' onChange={this.props.birthDate}></input>
                <input placeholder="Email" type='email' onChange={this.props.email}></input>
                <input placeholder="Phone number" type='number' onChange={this.props.number}></input>

            </div>)
    }
}

export class Education extends Component {
    render() {
        return (
            <div className="educationinputs">
                <h2>Education</h2>
                <input placeholder="School name" onChange={this.props.schoolName}></input>
                <input placeholder="Title of study" onChange={this.props.titleOfStudy}></input>
                <div className="scholldates">
                    <input type="date" onChange={this.props.startSchool}></input>
                    <input type="date" onChange={this.props.endSchool}></input>
                </div>

            </div>

        )
    }
}

export class Experience extends Component {
    render() {
        return (
            <div className="experienceinputs">
                <h2>Experience</h2>
                <input placeholder="Company name" onChange={this.props.companyName}></input>
                <input placeholder="Position title" onChange={this.props.positionTitle}></input>
                <textarea placeholder="Describtion" id="describtionarea" onChange={this.props.workDescribtion}></textarea>
                <div className="workdates">
                    <input type="date" onChange={this.props.startWork}></input>
                    <input type="date" onChange={this.props.endWork}></input>
                </div>
            </div>
        )
    }
}


  //A section to add your educational experience (school name, title of study, date of study)
//A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)