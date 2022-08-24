import React, { Component } from "react";
import { Preview } from './components/Preview'
import { Education, Experience, InputsPersonalData } from "./components/Inputs";
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      personalData: {
        firstName: "Pablo",
        lastName: "Escortbar",
        birthDate: "1949-12-01",
        email: "pablo@gmail.com",
        phoneNumber: "601101997"
      },
      education: {
        schoolName: "AGH",
        titleOfStudy: "Chemistry",
        startOfStudy: "1970-02-13",
        endOfStudy: "1973-01-18"
      },
      experience: {
        workName: "Trade Company",
        positionTitle: "Trader",
        startOfWork: "1974-02-13",
        endOfWork: "1986-01-18",
        describtion: "Trade some goods internationally"
      }

    }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleChangeBirthDate = this.handleChangeBirthDate.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeNumber = this.handleChangeNumber.bind(this)
    this.handleChangeStudyName = this.handleChangeStudyName.bind(this)
    this.handleChangeTitleOfStudy = this.handleChangeTitleOfStudy.bind(this)
    this.handleChangeStartSchool = this.handleChangeStartSchool.bind(this)
    this.handleChangeEndSchool = this.handleChangeEndSchool.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
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

  handleChangeStudyName(e) {
    this.setState({
      education: {
        schoolName: e.target.value,
        titleOfStudy: this.state.education.titleOfStudy,
        startOfStudy: this.state.education.startOfStudy,
        endOfStudy: this.state.education.endOfStudy
      }
    })
  }

  handleChangeTitleOfStudy(e) {
    this.setState({
      education: {
        schoolName: this.state.education.schoolName,
        titleOfStudy: e.target.value,
        startOfStudy: this.state.education.startOfStudy,
        endOfStudy: this.state.education.endOfStudy
      }
    })
  }

  handleChangeStartSchool(e) {
    this.setState({
      education: {
        schoolName: this.state.education.schoolName,
        titleOfStudy: this.state.education.titleOfStudy,
        startOfStudy: e.target.value,
        endOfStudy: this.state.education.endOfStudy
      }
    })
  }

  handleChangeEndSchool(e) {
    this.setState({
      education: {
        schoolName: this.state.education.schoolName,
        titleOfStudy: this.state.education.titleOfStudy,
        startOfStudy: this.state.education.startOfStudy,
        endOfStudy: e.target.value,
      }
    })
  }

  handleChangeDescription(e) {
    this.setState({
      experience: {
        workName: this.state.experience.workName,
        positionTitle: this.state.experience.positionTitle,
        startOfWork: this.state.experience.startOfWork,
        endOfWork: this.state.experience.endOfWork,
        describtion: e.target.value
      }

    })
  }

  render() {
    const { firstName, lastName, birthDate, email, phoneNumber } = this.state.personalData
    const { schoolName, startOfStudy, endOfStudy, titleOfStudy } = this.state.education
    const { workName, positionTitle, startOfWork, endOfWork, describtion } = this.state.experience
    return (
      <div className="app">
        <Header />
        <div className="content">
          <div className="inputs">
            <InputsPersonalData
              firstName={this.handleChangeFirstName}
              lastName={this.handleChangeLastName}
              birthDate={this.handleChangeBirthDate}
              email={this.handleChangeEmail}
              number={this.handleChangeNumber}
            />
            <Education
              schoolName={this.handleChangeStudyName}
              titleOfStudy={this.handleChangeTitleOfStudy}
              startSchool={this.handleChangeStartSchool}
              endSchool={this.handleChangeEndSchool} />
            <Experience
              workDescribtion={this.handleChangeDescription} />
          </div>
          <div className="previewpage">
            <Preview
              firstName={firstName}
              lastName={lastName}
              birthDate={birthDate}
              email={email}
              phone={phoneNumber}
              schoolName={schoolName}
              titleOfStudy={titleOfStudy}
              startOfStudy={startOfStudy}
              finishOfStudy={endOfStudy}
              companyName={workName}
              positionTitle={positionTitle}
              startOfWork={startOfWork}
              finishOfWork={endOfWork}
              workDescribtion={describtion} />
          </div>
        </div>

      </div>)
  }
}

class Header extends Component {
  render() {
    return <div className="header"><h1>CV-Creator</h1></div>
  }
}

export default App;
