import React, { useState } from "react";
import ScrollToTopButton from "../ScrollToTop";
import { Route } from "react-router-dom";

const Navigation = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const navStyle = {
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#292f3f",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        borderBottom: "2px solid #1c1f2b",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        padding: "0 20px",
    };

    const navLinkBaseStyle = {
        textDecoration: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        transition: "background-color 0.3s ease-in-out",
    };

    const navLinks = [
        { id: "home", text: "Home", color: "#ff4081" },
        { id: "about", text: "About", color: "#4caf50" },
        { id: "facts", text: "Facts", color: "#2196f3" },
        { id: "resume", text: "Resume", color: "#9c27b0" },
        { id: "portfolio", text: "Portfolio", color: "#e91e63" },
        { id: "expertise", text: "Expertise", color: "#00ffea" },
        { id: "services", text: "Services", color: "#673ab7" },
        { id: "testimonial", text: "Testimonials", color: "#3f51b5" },
        { id: "contact", text: "Contact", color: "#009688" },
    ];

    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    return (
        <div className="navbar" style={navStyle}>
            {navLinks.map(({ id, text, color }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    style={{
                        ...navLinkBaseStyle,
                        backgroundColor: hoveredLink === id ? color : "transparent",
                    }}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={handleMouseLeave}
                >
                    {text}
                </a>
            ))}
            <ScrollToTopButton />
        </div>
    );
};

export default Navigation;
