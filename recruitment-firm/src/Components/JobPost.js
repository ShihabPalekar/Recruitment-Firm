import React from "react"
import {Link} from "react-router-dom"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function JobPost(props){

    const btnStyle={
        margin: "theme.spacing(1)",
        backgroundColor: "lightseagreen",
        color: "mintcream"
    }

    return(
        <div>
            <Card className= "job-post">
            <CardContent>
                <h3>Designation: {props.jobTitle}</h3>
                <h3>Location: {props.location}</h3>
                <h3>Requirements:</h3>
                <ul>
                    <li>{props.req1}</li>
                    <li>{props.req2}</li>
                    <li>{props.req3}</li>
                </ul>
            </CardContent>
            </Card>
            <div className="job-post-btn">
                <Link to = "/jobopenings/jobform" style={{textDecoration: "none"}}>
                    <Button size="small" variant="contained" style={btnStyle}>
                        Apply
                    </Button>
                </Link>
            </div>      
        </div>
    )
}

export default JobPost