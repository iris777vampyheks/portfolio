import React from "react";
import ScrollToTopButton from "../ScrollToTop";
import { Route } from "react-router-dom";
// my new way to style in an object and call it as a prop in jsx :
const Navigation = () => {
    const navStyle = {
        fontFamily: "Courier New, monospace",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#0000",
        color: "white",
        fontSize: "18px",
        fontWeight: "normal",
        letterSpacing: "0.5px", 
        borderBottom: "2px solid white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", 
        padding: "0 20px",
    };

    const navLinkStyle = {
        color: "white",
        textDecoration: "none",
        padding: "8px 10px",
    };

    const navLinkHoverStyle = {
        backgroundColor: "black",
    };

    return (
        <div className="navbar" style={navStyle}>
        <a href="#home" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            Home
        </a>
        <a href="#about" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            About
        </a>
        <a href="#facts" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            Facts
        </a>
        <a href="#resume" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            Resume
        </a>
        <a href="#portfolio" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            Portfolio
        </a>
        <a href="#expertise" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            Expertise
        </a>
        <a href="#services" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            Services
        </a>
        <a href="#testimonial" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            Testimonials
        </a>
        <a href="#contact" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
            Contact
        </a>
        <ScrollToTopButton />
    </div>
    );
};

export default Navigation;
