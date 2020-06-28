import React from "react"
import { MuiThemeProvider } from "material-ui/styles";
import {TextField, DatePicker } from "material-ui"
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class FormWorkExperience extends React.Component{
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
        const { handleChange, values, handleDateChange } = this.props;
        return(
            <MuiThemeProvider>
                <div className="exp-container">
                    <Card className = "exp-card1">
                        <CardContent>
                            <h3>Current/Previous Company:</h3>
                            <TextField 
                                type= "text"
                                hintText= "Name of Current Company"
                                onChange= {handleChange("currCo")}
                                errorText = {values.errorCurrCo}
                                defaultValue= {values.currCO}
                            />
                            <br/>
                            <TextField 
                                type= "text"
                                hintText= "Job Title"
                                onChange= {handleChange("currJobTitle")}
                                errorText = {values.errorCurrJobTitle}
                                defaultValue= {values.currJobTitle}
                            />
                            <br/>
                            <DatePicker 
                                hintText= "From"
                                onChange= {handleDateChange("currFrom")}
                                errorText = {values.errorCurrFrom}
                                value= {values.currFrom}
                            />
                            <DatePicker 
                                hintText= "To"
                                onChange= {handleDateChange("currTo")}
                                errorText = {values.errorCurrTo}
                                value= {values.currTo}
                            />
                            <FormControl style={{width: "250px"}}>
                            <InputLabel shrink >Notice Period</InputLabel>
                            <Select
                                value={values.currNP}
                                onChange= {handleChange("currNP")}
                                errorText = {values.errorCurrNP}
                            >
                                <MenuItem value={7}> 1 week </MenuItem>
                                <MenuItem value={15}> 15 days </MenuItem>
                                <MenuItem value={30}> 1 month </MenuItem>
                                <MenuItem value={60}> 2 months </MenuItem>
                                <MenuItem value={90}> 3 months </MenuItem>
                            </Select>
                            </FormControl>
                            <br/>
                            <br/>
                        </CardContent>
                    </Card>
                    <Card className="exp-card2">
                        <CardContent>
                            <h3>Previous Company:</h3>
                            <TextField 
                                type= "text"
                                hintText= "Name of Previous Company"
                                onChange= {handleChange("prevCo1")}
                                defaultValue= {values.prevCo1}
                            />
                            <br/>
                            <TextField 
                                type= "text"
                                hintText= "Job Title"
                                onChange= {handleChange("prevJobTitle1")}
                                defaultValue= {values.prevJobTitle1}
                            />
                            <br/>
                            <DatePicker 
                                hintText= "From"
                                onChange= {handleDateChange("prevFrom1")}
                                value= {values.prevFrom1}
                            />
                            <DatePicker 
                                hintText= "To"
                                onChange= {handleDateChange("prevTo1")}
                                value= {values.prevTo1}
                            />
                            <br/>
                        </CardContent>
                    </Card>
                    <Card className="exp-card3">
                        <CardContent>
                            <h3>Previous Company:</h3>
                            <TextField 
                                type= "text"
                                hintText= "Name of Previous Company"
                                onChange= {handleChange("prevCo2")}
                                defaultValue= {values.prevCo2}
                            />
                            <br/>
                            <TextField 
                                type= "text"
                                hintText= "Job Title"
                                onChange= {handleChange("prevJobTitle2")}
                                defaultValue= {values.prevJobTitle2}
                            />
                            <br/>
                            <DatePicker 
                                hintText= "From"
                                onChange= {handleDateChange("prevFrom2")}
                                value= {values.prevFrom2}
                            />
                            <DatePicker 
                                hintText= "To"
                                onChange= {handleDateChange("prevTo2")}
                                value= {values.prevTo2}
                            />
                            <br/>
                        </CardContent>
                    </Card>
                </div>
                <div className="exp-buttons">
                    <div className="exp-btn1">
                        <Button
                            variant="contained"
                            onClick={this.back}
                        >
                            Prev Page </Button>
                    </div>
                    <div className="exp-btn2">
                        <Button
                            color= "primary"
                            variant="contained"
                            onClick={this.continue}
                        >
                            Submit </Button>
                        <br/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default FormWorkExperience