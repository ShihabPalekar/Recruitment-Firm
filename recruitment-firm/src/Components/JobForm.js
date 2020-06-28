import React from "react"
import FormPersonalDetails from "./FormPersonalDetails"
import FormQualifications from "./FormQualifications"
import FormWorkExperience from "./FormWorkExperience"
import FormSuccessMsg from "./FormSuccessMsg"


class JobForm extends React.Component{
    constructor(){
        super();
        this.state = {
            step: 1,

            firstName: "", lastName: "", contact: "", email: "", birthDate: "",
            errorFirstName : "", errorLastName: "", errorContact: "", errorEmail: "", errorBirthDate: "",
            college: "", degree: "", passYear: "", otherSkill1: "", otherSkill2: "", otherSkill3: "",
            errorCollege: "", errorDegree: "", errorPassYear: "",
            currCo: "", currJobTitle: "", currNP: "", currFrom: "", currTo: "",
            errorCurrCo: "", errorCurrJobTitle: "", errorCurrNP: "", errorCurrFrom: "", errorCurrTo: "",
            prevCo1: "", prevJobTitle1: "", prevFrom1: "", prevTo1: "",
            prevCo2: "", prevJobTitle2: "", prevFrom2: "", prevTo2: "",
        }
    }

    nextStep = () => {
        const {step, firstName, lastName, contact, email, birthDate, college, degree, 
               passYear, currCo, currJobTitle, currNP, currFrom, currTo } = this.state;
        
        if (step === 1){
            if (firstName === "") {
                this.setState({errorFirstName: "Please enter your First Name"})
            } 
            else if (lastName === "") {
                this.setState({errorLastName: "Please enter your Last Name"})
            }
            else if (lastName === "") {
                this.setState({errorLastName: "Please enter a valid Last Name"})
            }
            else if (contact === "" || contact.length !== 10) {
                this.setState({errorContact: "Please enter a valid Contact Number"})
            }
            else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                this.setState({errorEmail: "Please enter a valid email address"})
            }
            else if (birthDate === "") {
                this.setState({errorBirthDate: "Please enter your birth date"})
            }
            else {
                this.setState({
                    step: step + 1, errorFirstName: "", errorLastName: "", errorContact: "", errorEmail: "", errorBirthDate: ""
                })
            }
        }
        else if (step === 2){
            if (degree === ""){
                this.setState({errorDegree: "Please enter your degree"})
            }
            else if (college === ""){
                this.setState({errorCollege: "Please enter the name of your college"})                
            }
            else if (passYear === ""){
                this.setState({errorPassYear: "Please enter your year of passing"})                
            }
            else {
                this.setState({
                    step: step + 1, errorCollege: "", errorDegree: "", errorPassYear: ""
                })
            }
        }
        else if (step === 3){
            if (currCo === ""){
                this.setState({errorCurrCo: "Please enter the name of the company"})
            }
            else if (currJobTitle === ""){
                this.setState({errorCurrJobTitle: "Please enter your designation"})
            }
            else if (currFrom === ""){
                this.setState({errorCurrFrom: "Please enter your joining date"})
            }
            else if (currTo === ""){
                this.setState({errorCurrTo: "Please enter your leaving date"})
            }
            else if (currNP === ""){
                this.setState({errorCurrNP: "Please enter your notice period"})
            }
            else {
                this.setState({
                    step: step + 1, errorCurrCo: "", errorCurrJobTitle: "", errorCurrNP: "", errorCurrFrom: "", errorCurrTo: ""
                })
            }
        }
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({ step: step - 1 });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    handleDateChange = input => (e, date) => {
        console.log(date)
        this.setState({ [input]: date })
    }

    render(){
        const { step } = this.state;

        const { firstName, lastName, contact, email, birthDate, errorFirstName, errorLastName, errorContact, 
                errorEmail, errorBirthDate, college, degree, passYear, otherSkill1, otherSkill2, otherSkill3,
                errorCollege, errorDegree, errorPassYear, currCo, currJobTitle, currNP, currFrom, currTo, errorCurrCo,
                errorCurrJobTitle, errorCurrNP, errorCurrFrom, errorCurrTo, prevCo1, prevJobTitle1, prevFrom1,
                prevTo1, prevCo2, prevJobTitle2, prevFrom2, prevTo2 } = this.state;

        const values = { firstName, lastName, contact, email, birthDate, errorFirstName, errorLastName, errorContact, 
                         errorEmail, errorBirthDate, college, degree, passYear, otherSkill1, otherSkill2, otherSkill3,
                         errorCollege, errorDegree, errorPassYear, currCo, currJobTitle, currNP, currFrom, currTo,
                         errorCurrCo, errorCurrJobTitle, errorCurrNP, errorCurrFrom, errorCurrTo, prevCo1,
                         prevJobTitle1, prevFrom1, prevTo1, prevCo2, prevJobTitle2, prevFrom2, prevTo2 };
        
        switch(step){
            case 1:
                return(
                    <FormPersonalDetails 
                        nextStep= {this.nextStep}
                        handleChange= {this.handleChange}
                        handleDateChange= {this.handleDateChange}
                        values= {values}
                    />
                )
            case 2:
                return(
                    <FormQualifications 
                        nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange= {this.handleChange}
                        handleDateChange= {this.handleDateChange}
                        values= {values}
                    />
                )
            case 3:
                return(
                    <FormWorkExperience 
                        nextStep= {this.nextStep}
                        prevStep= {this.prevStep}
                        handleChange= {this.handleChange}
                        handleDateChange= {this.handleDateChange}
                        values= {values}
                    />
                )
            case 4:
                return(
                    <FormSuccessMsg 
                        
                    />
                )
            }            
        }
}

export default JobForm