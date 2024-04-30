import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
      setFadeOut(true); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fadeOut' : ''}`}>
      {}
      <h1 style={{ fontFamily: 'Aptos, sans-serif' }}>OZEX</h1>
    </div>
  );
};

export default SplashScreen;
