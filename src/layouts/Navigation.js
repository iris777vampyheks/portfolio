import React from "react";

const Navigation = () => {
    const navStyle = {
        fontFamily: "Courier New, monospace",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "80px",
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        letterSpacing: "2px",
        borderBottom: "2px solid white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const navLinkStyle = {
        color: "white",
        textDecoration: "none",
        padding: "10px 15px",
        transition: "transform 0.2s ease-in-out",
    };

    const navLinkHoverStyle = {
        transform: "scale(1.1)",
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
            <a href="#portfolio" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
                Portfolio
            </a>
            <a href="#expertise" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
                Expertise
            </a>
            <a href="#services" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
                Services
            </a>
            <a href="#contact" style={{ ...navLinkStyle, ...navLinkHoverStyle }}>
                Contact
            </a>
        </div>
    );
};

export default Navigation;
