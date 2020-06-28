import React from "react"
import JobPost from "./JobPost"
import jobPostData from "../jobPostData"

function JobOpenings(){

    const data = jobPostData.map(item => {
        return <JobPost
            key = {item.id}
            jobTitle = {item.jobTitle}
            location = {item.jobLocation}
            req1 = {item.requirement.req1}
            req2 = {item.requirement.req2}
            req3 = {item.requirement.req3}
        />
    })

    return(
        <div className="job-posts-container">
            {data}
        </div>
    )
} 

export default JobOpenings