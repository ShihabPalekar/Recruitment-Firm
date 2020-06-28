import React from "react"
import { MuiThemeProvider } from "material-ui/styles";
import { TextField, DatePicker } from "material-ui"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class FormQualifications extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { handleChange, handleDateChange, values } = this.props;
        return(
            <MuiThemeProvider>
                <div className= "qual-container">
                    <Card className="qual-card-1">
                        <CardContent>
                            <h2>Highest Qualification:</h2>
                            <TextField 
                                type= "text"
                                hintText= "Name of Degree"
                                onChange= {handleChange("degree")}
                                errorText = {values.errorDegree}
                                defaultValue= {values.degree}
                            />
                            <br/>
                            <TextField 
                                type= "text"
                                hintText= "Name of College/University"
                                onChange= {handleChange("college")}
                                errorText = {values.errorCollege}
                                defaultValue= {values.college}
                            />
                            <br/>
                            <DatePicker 
                                hintText= "Passing Year"
                                onChange= {handleDateChange("passYear")}
                                errorText = {values.errorPassYear}
                                value= {values.passYear}
                            />
                            <br/>
                        </CardContent>
                    </Card>
                    <Card className="qual-card-2">
                        <CardContent>
                            <h2>Other Skills:</h2>
                            <TextField 
                                type= "text"
                                hintText= "Type here"
                                onChange= {handleChange("otherSkill1")}
                                defaultValue= {values.otherSkill1}
                            />
                            <br/>
                            <TextField 
                                type= "text"
                                hintText= "Type here"
                                onChange= {handleChange("otherSkill2")}
                                defaultValue= {values.otherSkill2}
                            />
                            <br/>
                            <TextField 
                                type= "text"
                                hintText= "Type here"
                                onChange= {handleChange("otherSkill3")}
                                defaultValue= {values.otherSkill3}
                            />
                            <br/>
                            <br/>
                        </CardContent>
                    </Card>
                </div>
                <div className="qual-buttons">
                    <div className="qual-btn1">
                        <Button
                            variant="contained"
                            onClick={this.back}
                        >
                            Prev Page </Button>
                    </div>
                    <div className="qual-btn2">
                        <Button
                            color= "primary"
                            variant="contained"
                            onClick={this.continue}
                        >
                            Next Page </Button>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default FormQualifications