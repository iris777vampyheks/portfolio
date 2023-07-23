// Navigation.js
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const navStyle = {
        fontFamily: "Rockwell",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "90px",
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
    };

    const navLinkStyle = {
        color: "white",
        textDecoration: "none",
    };

    return (
        <div className="navbar" style={navStyle}>
            <NavLink to={"/"} style={navLinkStyle}>
                Home
            </NavLink>
            <NavLink to={"/about"} style={navLinkStyle}>
                About
            </NavLink>
            {/* Add links for the new sections */}
            <NavLink to={"/facts"} style={navLinkStyle}>
                Facts
            </NavLink>
            <NavLink to={"/portfolio"} style={navLinkStyle}>
                Portfolio
            </NavLink>
            <NavLink to={"/skills"} style={navLinkStyle}>
                Skills
            </NavLink>
            <NavLink to={"/services"} style={navLinkStyle}>
                Services
            </NavLink>
            <NavLink to={"/Contact"} style={navLinkStyle}>
                Contact
            </NavLink>
        </div>
    );
};

export default Navigation;
