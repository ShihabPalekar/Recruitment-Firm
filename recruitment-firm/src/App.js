import React from "react"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import JobOpenings from "./Components/JobOpenings"
import Contact from "./Components/Contact"
import JobForm from "./Components/JobForm"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App(){
    return(
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact /> 
                    <Route path="/about" exact component={About} />
                    <Route path="/jobopenings" exact component={JobOpenings} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/jobopenings/jobform" exact component={JobForm} />
                </Switch>
            </div>
        </Router>
    )
}

export default App