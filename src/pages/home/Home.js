import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = 'Web Developer';
  const [border, setBorder] = useState(true);

  const currentIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const typingSpeedRef = useRef(150);

  useEffect(() => {
    const typeText = () => {
      const currentIndex = currentIndexRef.current;
      const isDeleting = isDeletingRef.current;

      const currentText = isDeleting
        ? fullText.substring(0, currentIndex)
        : fullText.substring(0, currentIndex + 1);

      setText(currentText);

      if (!isDeleting && currentIndex === fullText.length) {
        typingSpeedRef.current = 1000;
        isDeletingRef.current = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeletingRef.current = false;
        setBorder(!border);
        typingSpeedRef.current = 150;
      }

      currentIndexRef.current = isDeleting ? currentIndex - 1 : currentIndex + 1;
    };

    const intervalId = setInterval(typeText, typingSpeedRef.current);
    let timeoutId;

    const repeatLoop = () => {
      timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        currentIndexRef.current = 0;
        isDeletingRef.current = false;
        typingSpeedRef.current = 100;
        intervalId = setInterval(typeText, typingSpeedRef.current);
      }, 5000);
    };

    repeatLoop();

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [border]);

  return (
    <div className='sec-1'>
      <div className='texts' style={{ textAlign: 'center' }}>
      <h1 className='name mt-1'>Bensassi Nour Ikram</h1>
        <p className='dev'>
          {border && (
            <span style={{ borderBottom: '7px solid blue' }}>
              {text}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Home;