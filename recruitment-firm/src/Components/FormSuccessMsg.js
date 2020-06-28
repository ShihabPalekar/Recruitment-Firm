import React from "react"
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class FormSuccessMsg extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const btnStyle={
            margin: "theme.spacing(1)",
            backgroundColor: "lightseagreen",
            color: "mintcream"
        }

        return(
            <div>
                <Card className= "success-card"> 
                    <CardContent>
                        <h2>You've successfully applied for the job opening!</h2>
                        <h3>Our HR Executive will contact you shortly with further updates.</h3>
                    </CardContent>
                </Card>
                <div className= "success-btn">
                    <Link to = "/jobopenings" style={{textDecoration: "none"}}>
                        <Button variant="contained" style={btnStyle} > 
                            Explore Job Opportunities 
                        </Button>
                    </Link>
                </div>
            </div>
            
        )
    }
}

export default FormSuccessMsg