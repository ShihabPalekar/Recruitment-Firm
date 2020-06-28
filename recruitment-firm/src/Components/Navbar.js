import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <Link to="/" style={{color: "AliceBlue", textDecoration: "none"}}>
                <h2>LOGO</h2>
            </Link>
            <ul className="nav-links">
                <Link to="/about" style={{color: "AliceBlue", textDecoration: "none"}}>
                    <li className="nav-link"><h4> About us </h4></li>
                </Link>
                <Link to ="/jobopenings" style={{color: "AliceBlue", textDecoration: "none"}}>
                    <li className="nav-link"><h4> Job Openings </h4></li>
                </Link>
                <Link to="contact" style={{color: "AliceBlue", textDecoration: "none"}}>
                    <li className="nav-link"><h4> Contact us </h4></li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar