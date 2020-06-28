import React from "react"
import { MuiThemeProvider } from "material-ui/styles";
import { TextField, DatePicker } from "material-ui"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class FormPersonalDetails extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){
        const { handleChange, values, handleDateChange } = this.props;
        return(
            <MuiThemeProvider>
                <Card className="personal-card">
                    <CardContent>
                        <h2>Personal Details</h2>
                        <TextField 
                            name= "firstName"
                            hintText="Enter Your First Name"
                            onChange= {handleChange("firstName")}
                            errorText = {values.errorFirstName}
                            defaultValue= {values.firstName}
                        />
                        <br/>
                        <TextField 
                            name= "lastName"
                            hintText="Enter Your Last Name"
                            onChange= {handleChange("lastName")}
                            errorText = {values.errorLastName}
                            defaultValue= {values.lastName}
                        />
                        <br/>
                        <TextField 
                            type= "number"
                            name= "contact"
                            hintText="Enter Your Contact Number"
                            onInput = {(e) =>{
                                e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)}}
                            onChange= {handleChange("contact")}
                            errorText = {values.errorContact}
                            defaultValue= {values.contact}
                        />
                        <br/>
                        <TextField 
                            type= "email"
                            name= "email"
                            hintText="Enter Your Email Id"
                            onChange= {handleChange("email")}
                            errorText = {values.errorEmail}
                            defaultValue= {values.email}
                        />
                        <br/>
                        <DatePicker 
                            hintText= "Enter Your Birth Date"
                            onChange= {handleDateChange("birthDate")}
                            errorText = {values.errorBirthDate}
                            value= {values.birthDate}
                        />
                        <br/>
                    </CardContent>
                    </Card>
                    <div className="personal-btn">
                        <Button
                            color= "primary"
                            variant="contained"
                            onClick={this.continue}
                        >
                            Next Page </Button>
                        <br/>
                    </div>
           </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails