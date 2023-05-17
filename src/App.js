import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import About from './About';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="animate-bounce flex items-center justify-center h-screen font-bold">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Navbar />
          <Section1 />
          <About />
          <Section2 />
          <Section3 />
        </>
      )}
    </>
  );
}

export default App;
