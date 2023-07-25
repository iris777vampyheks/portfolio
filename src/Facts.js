import React, { Component } from 'react';

const factsData = [
  {
    title: 'Fact 1',
    description: 'Makn3asch bkri wtgol',
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
    description: 'Coding is joyful',
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

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isDarkMode: false,
    };
  }

  handlePrev = () => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === 0 ? factsData.length - 1 : prevState.activeIndex - 1,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === factsData.length - 1 ? 0 : prevState.activeIndex + 1,
    }));
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { activeIndex, isDarkMode } = this.state;
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
          <button className="prev-button" onClick={this.handlePrev}>
            &#8249;
          </button>
          <button className="next-button" onClick={this.handleNext}>
            &#8250;
          </button>
          <button className="dark-mode-toggle" onClick={this.toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    );
  }
}

export default Facts;
