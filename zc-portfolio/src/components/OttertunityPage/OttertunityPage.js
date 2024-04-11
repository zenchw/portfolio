import React, { useState } from 'react';
import './OttertunityPage.css'

function OttertunityPage() {
  const [flowers, setFlowers] = useState([]);

  const handleBackgroundClick = (event) => {
    const containerBounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - containerBounds.left;
    const y = event.clientY - containerBounds.top;
    setFlowers(prevFlowers => [...prevFlowers, { x, y }]);
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="App" style={{
      height: "200vh",
      width: "100vw",
      margin: "0",
      padding: "0",
      position: "relative",
      backgroundImage: `url("/ottertunity/grass.png")`,
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      backgroundPosition: "center",
      overflow: "hidden",
    }}
    // Place Flowers on click
      onClick={handleBackgroundClick}
    >
    
    {flowers.map((flower, index) => (
      <img
        key={index}
        src="/ottertunity/flower.png"
        alt="Flower"
        style={{
          position: 'absolute',
          left: `${flower.x}px`,
          top: `${flower.y}px`,
          pointerEvents: 'none', 
          width: '1%'
        }}
      />
    ))}
      {/* Top container */}
      <div style={{
        textAlign: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <img src="/ottertunity/otters.gif" alt="otters-swimming" style={{ maxWidth: '70%', maxHeight: '70%'}} onClick={handleImageClick} />
        <a href="/ottertunity/DRP HCD Portfolio.pdf" target="_blank" rel="noopener noreferrer" style={{
          position: 'absolute',
          top: 0,
          right: 0,
          margin: '7vh',
        }} onClick={handleImageClick}>
          <img src="/ottertunity/file.png" alt="Open PDF" style={{ width: '8vw' }} onClick={handleImageClick} />
        </a>
      </div>
      
      {/* Bottom container */}
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: "7%",
        paddingRight: "7%",
      }}>
        <div style={{ width: "65%" }}>
          <img src="/ottertunity/ottertunity-logo.png" alt="Logo" style={{ width: "100%" }} />
        </div>
          <div style={{ width: "35%" }}>
            <img src="/ottertunity/ottertunity-mockup.png" alt="Mockup" style={{ width: "100%" }} onClick={handleImageClick} />
          </div>
      </div>
    </div>
  );
}

export default OttertunityPage;
