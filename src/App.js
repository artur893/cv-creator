import React, { Component } from "react";
import { Preview } from './components/Preview'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      personalData: {
        firstName: "Pablo",
        lastName: "Escobar",
        birthDate: "1949-12-01",
        email: "pablo@gmail.com",
        phoneNumber: "601101997"
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
        email: this.state.personalData.email,
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
        email: this.state.personalData.email,
        phoneNumber: this.state.personalData.phoneNumber
      }
    })
  }

  handleChangeBirthDate(e) {
    this.setState({
      personalData: {
        firstName: this.state.personalData.firstName,
        lastName: this.state.personalData.lastName,
        birthDate: e.target.value,
        email: this.state.personalData.email,
        phoneNumber: this.state.personalData.phoneNumber
      }
    })
  }

  handleChangeEmail(e) {
    this.setState({
      personalData: {
        firstName: this.state.personalData.firstName,
        lastName: this.state.personalData.lastName,
        birthDate: this.state.personalData.birthDate,
        email: e.target.value,
        phoneNumber: this.state.personalData.phoneNumber
      }
    })
  }

  handleChangeNumber(e) {
    this.setState({
      personalData: {
        firstName: this.state.personalData.firstName,
        lastName: this.state.personalData.lastName,
        birthDate: this.state.personalData.birthDate,
        email: this.state.personalData.email,
        phoneNumber: e.target.value
      }
    })
  }
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="content">
          <Inputs
            firstName={this.handleChangeFirstName}
            lastName={this.handleChangeLastName}
            birthDate={this.handleChangeBirthDate}
            email={this.handleChangeEmail}
            number={this.handleChangeNumber}
          />
          <Preview
            firstName={this.state.personalData.firstName}
            lastName={this.state.personalData.lastName}
            birthDate={this.state.personalData.birthDate}
            email={this.state.personalData.email}
            phone={this.state.personalData.phoneNumber} />
        </div>
      </div>)
  }
}


class Inputs extends Component {
  render() {
    return (
      <div className="inputs">
        <input placeholder="First name" onChange={this.props.firstName}></input>
        <input placeholder="Last name" onChange={this.props.lastName}></input>
        <input placeholder="Date of birth" type='date' onChange={this.props.birthDate}></input>
        <input placeholder="Email" type='email' onChange={this.props.email}></input>
        <input placeholder="Phone number" type='number' onChange={this.props.number}></input>

      </div>)
  }
}

class Header extends Component {
  render() {
    return <div className="header"><h1>CV-Creator</h1></div>
  }
}

//A section to add your educational experience (school name, title of study, date of study)
//A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)

export default App;
