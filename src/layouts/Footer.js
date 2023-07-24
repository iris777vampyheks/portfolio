import React from 'react';
import '../styles/modules/home/_home.scss';

const Footer = () => {
    return (
        <footer className='custom-footer'>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-social-heading">Stay Connected !</h3>
                        <div className="footer-social-links">
                            <a href="https://www.linkedin.com/in/bensassi-nour-ikram-8011ab250/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/iris777vampyheks" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/astraldivine_hh777/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/Ikram777nour" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <p className="footer-copy">© 2023 Bensassi Nour Ikram</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
