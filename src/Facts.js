import React, { useState } from 'react';

const factsData = [
    {
        title: 'Fact 1',
        description: 'Man3asch bkri wtgol',
    },
    {
        title: 'Fact 2',
        description: 'I work smart not hard',
    },
    {
        title: 'Fact 3',
        description: 'I like to paint & dance',
    },
    {
        title: 'Fact 4',
        description: 'Coding is joyfull',
    },
    {
        title: 'Fact 5',
        description: 'I like coding calmly',
    },
    {
        title: 'Fact 6',
        description: 'I love weird shit',
    },
];

const Facts = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? factsData.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === factsData.length - 1 ? 0 : prevIndex + 1));
    };
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
  
    return (
      <div className='parent-fact'>
      <div className={`carousel-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="carousel">
          {factsData.map((fact, index) => (
            <div
              key={index}
              className={`fact-card ${activeIndex === index ? 'active' : ''}`}
              style={{
                transform: `rotateY(${(index - activeIndex) * 60}deg) translateZ(200px)`,
                zIndex: factsData.length - Math.abs(index - activeIndex),
                opacity: factsData.length - Math.abs(index - activeIndex) === factsData.length ? 1 : 0.6,
              }}
            >
              <h2>{fact.title}</h2>
              <p>{fact.description}</p>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="next-button" onClick={handleNext}>
          &#8250;
        </button>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      </div>
    );
  };
  
  export default Facts;