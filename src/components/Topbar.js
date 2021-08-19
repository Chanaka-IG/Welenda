
import React from 'react'
import './Topbar.css'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
 

function Topbar() {
    return (
        <div className="nav">
            <div ClassName="leftside">
                <a href="#"><img src={logo} alt="Welenda Logo" /> </a>
                <span className="title">Admin Panel</span>

            </div>
                <ul className="nav-links">
                   
                    <Link to ="/Home"><li>Home</li></Link>
                    <Link to ="/Search"> <li>Search</li></Link>
                    
                    <Link to="/Login"><li><a href="#" className="log-in" style={{color:'#fbfbfb'}}>Logout</a></li></Link>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
        </div>

    )
}
export default Topbar
