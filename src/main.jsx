import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import SplashScreen from './SplashScreen.jsx';
import './index.css';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Function to close the SplashScreen after some time
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <React.StrictMode>
          <App />
        </React.StrictMode>
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
