import React from "react";
const Services = () => {
    return (
        <div className="services-container">
            <div className="services-header">
                <h2 className="services-heading">Our Services 🚀</h2>
            </div>
            <div className="services-content">
                <div className="service">
                    <span>👨‍💻</span>
                    <h3>Web Development</h3>
                    <p>
                        We provide cutting-edge web development solutions that deliver a seamless user experience.
                    </p>
                </div>
                <div className="service">
                    <span>🎨</span>
                    <h3>Graphic Design</h3>
                    <p>
                        Our talented designers create stunning graphics that captivate and engage your audience.
                    </p>
                </div>
                <div className="service">
                    <span>📱</span>
                    <h3>Mobile Apps</h3>
                    <p>
                        Develop mobile applications for iOS and Android platforms to extend your reach.
                    </p>
                </div>
                <div className="service">
                    <span>🔒</span>
                    <h3>Penetration Test</h3>
                    <p>
                        Ensure the security of your applications and networks with thorough penetration testing.
                    </p>
                </div>
                <div className="service">
                    <span>🤖</span>
                    <h3>Automation</h3>
                    <p>
                        Streamline repetitive tasks and improve efficiency through automated processes.
                    </p>
                </div>
                <div className="service">
                    <span>📈</span>
                    <h3>Ads Manager</h3>
                    <p>
                        Optimize your advertising campaigns with data-driven insights and effective management.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
