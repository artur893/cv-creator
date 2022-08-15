import React, { Component } from "react";
import { Preview } from './components/Preview'

class App extends Component {
  render() {
    return (
      <div>
        <Inputs />
      </div>)
  }
}


class Inputs extends Component {
  constructor() {
    super()
    this.state = {
      personalData: {
        firstName: "Pablo",
        lastName: "Escobar",
        birthDate: "1949-12-01",
        email: "pablo@gmail.com",
        phoneNumber: "601 101 997"
      },
      education: {},
      experience: {}

    }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleChangeBirthDate = this.handleChangeBirthDate.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeNumber = this.handleChangeNumber.bind(this)
  }

  handleChangeFirstName(e) {
    this.setState({
      personalData: {
        firstName: e.target.value,
        lastName: this.state.personalData.lastName,
        birthDate: this.state.personalData.birthDate,
        email: this.state.personalData.birthDate,
        phoneNumber: this.state.personalData.phoneNumber
      }
    })
  }

  handleChangeLastName(e) {
    this.setState({
      personalData: {
        firstName: this.state.personalData.firstName,
        lastName: e.target.value,
        birthDate: this.state.personalData.birthDate,
        email: this.state.personalData.birthDate,
        phoneNumber: this.state.personalData.phoneNumber
      }
    })
  }

  handleChangeBirthDate(e) {
    this.setState({
      birthDate: e.target.value
    })
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleChangeNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }


  render() {
    return (
      <div>
        <input placeholder="First name" onChange={this.handleChangeFirstName}></input>
        <input placeholder="Last name" onChange={this.handleChangeLastName}></input>
        <input placeholder="Date of birth" type='date' onChange={this.handleChangeBirthDate}></input>
        <input placeholder="Email" type='email' onChange={this.handleChangeEmail}></input>
        <input placeholder="Phone number" type='number' onChange={this.handleChangeNumber}></input>
        <Preview
          firstName={this.state.personalData.firstName}
          lastName={this.state.personalData.lastName}
          birthDate={this.state.personalData.birthDate} />
      </div>)
  }
}

//A section to add your educational experience (school name, title of study, date of study)
//A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)

export default App;
