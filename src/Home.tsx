import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/about');
  };

  return (
    <div className='home'>
      <div className='hero-section'>
        <h1>Welcome to Steve Jobs' Personal Website</h1>
        <h2>Frontend Engineer</h2>
        <button className='get-started-btn' onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
