import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from "reactstrap";

const header = () =>

    <div className="w3-top">
        <div className="w3-bar w3-red w3-card w3-left-align w3-large">
            <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars" /></a>
            <Link to="/home"><a href="#" className="w3-bar-item w3-button w3-padding-large w3-white">Home</a></Link>
            <Link to="/profile"><a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Profile</a></Link>
            <Link to="/news"><a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">News</a></Link>
        </div>
        {/* Navbar on small screens */}
        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
            <Link to="/home"><a href="#" className="w3-bar-item w3-button w3-padding-large">Home</a></Link>
            <Link to="/profile"><a href="#" className="w3-bar-item w3-button w3-padding-large">Profile</a></Link>
            <Link to="/news"><a href="#" className="w3-bar-item w3-button w3-padding-large">News</a></Link>
        </div>
    </div>
export default header;