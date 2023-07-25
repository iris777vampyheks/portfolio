import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className="scroll-to-top"
            style={{
                display: isVisible ? "block" : "none",
                width: "50px",
                height: "57px",
                position: "fixed",
                textAlign: "center",
                bottom: "20px",
                right: "33px",
                background: "#555",
                color: "white",
                padding: "10px",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: "999",
            }}
            onClick={scrollToTop}
        >
<i className="fa fa-chevron-up" aria-hidden="true"></i> 
</div>
    );
};

export default ScrollToTopButton;
