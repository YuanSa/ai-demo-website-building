import React from 'react';
import Lottie from 'lottie-react';
import animationData from './animation.json';

const LottieAnimation: React.FC = () => {
  return <Lottie animationData={animationData} />;
};

export default LottieAnimation;
