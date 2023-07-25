import React from "react";

const skillsData = [
    {
        title: "Web Development",
        description: "Creating responsive and user-friendly web applications using modern technologies like React, Node.js, and Express.",
        icon: "🧑‍💻",
    },
    {
        title: "UI/UX Design",
        description: "Crafting visually stunning and intuitive user interfaces, with a focus on user experience and usability.",
        icon: "🎨",
    },
    {
        title: "Mobile App Dev",
        description: "Building cross-platform mobile apps with React Native that deliver a seamless experience on both Android and iOS devices.",
        icon: "📱",
    },
    {
        title: "Data Analysis",
        description: "Analyzing and interpreting data to derive valuable insights using Python, other languages and data visualization libraries.",
        icon: "📊",
    },
    {
        title: "Machine Learning",
        description: "Developing intelligent systems and predictive models with Python and TensorFlow for solving real-world problems.",
        icon: "🤖",
    },
    {
        title: "Leathership",
        description: "Exhibiting the art of commanding attention and inspiring through impactful presentations, accompanied by unwavering confidence.",
        icon: "💼",
    },
    {
        title: "Creative Writing",
        description: "Expressing ideas and stories through captivating and eloquent writing to entertain and inspire readers.",
        icon: "✍️",
    },
    {
        title: "Collaborative",
        description: "Exemplifying the power of teamwork and cooperation, seamlessly working with others to achieve shared objectives. Valuing diverse perspectives.",
        icon: "🤝",
    }
    ,
    {
        title: "Analytical",
        description: "Demonstrating sharp analytical skills to dissect complex problems and devise effective solutions. Utilizing logical reasoning.",
        icon: "🧠",
    },
    {
        title: "Technical Aptitude",
        description: "Demonstrating expertise in relevant software and technical tools. Adapting quickly to new technologies and leveraging them to optimize workflows.",
        icon: "💻",
    },

];

const Skills = () => {
    return (
        <div className="parent-skills" id="expertise">
            <h2 className="text-center pt-5">Expertise:</h2>
            <div className="skills-container" >
                {skillsData.map((skill, index) => (

                    <div key={index} className="skill-card mt-4">
                        <div className="skill-icon">{skill.icon}</div>
                        <h3 className="skill-title">{skill.title}</h3>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
