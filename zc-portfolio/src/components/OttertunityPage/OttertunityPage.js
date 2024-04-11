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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vw",
      margin: "0",
      padding: "0",
      position: "relative",
      overflow: "hidden",
      backgroundImage: `url("/ottertunity/grass.png")`,
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      backgroundPosition: "center"
    }}
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

      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        
        {/* Logo */}
        <img src="/ottertunity/logo-default.png" alt="Logo"
        style={{
          width: "55%",
          paddingTop:"3%",
        }} />

        {/* Otters GIF */}
        <img src="/ottertunity/otters.gif" alt="otters-swimming"
        style={{
          maxWidth: "66%",
          maxHeight: "66%",
          width: "auto",
          height: "auto",
        }} />

        <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "5%",
          }}>
          {/* Mockup Image */}
          <img src="/ottertunity/ottertunity-mockup.png" alt="Mockup" style={{ width: "35%", height: "auto", paddingLeft: "5%", paddingBottom: "5%" }} />

          {/* YouTube Video Embed */}
          <div style={{
            width: "45%",
            position: "relative",
            paddingBottom: "25.25%",
            height: 0
          }}>
            <iframe
              src="https://www.youtube.com/embed/kUelAG3v-dM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
            ></iframe>
          </div>
        </div>

        {/* Link to HCD Portfolio */}
        <a href="/ottertunity/DRP HCD Portfolio.pdf" target="_blank" rel="noopener noreferrer" style={{
          position: "absolute",
          top: 0,
          right: 0,
          marginTop: '3%',
          marginRight: '5%',
        }} onClick={handleImageClick}>
          <img src="/ottertunity/file.png" alt="Open PDF" style={{ width: '10vw' }} onClick={handleImageClick} />
        </a>
      </div>
    </div>
  );
}

export default OttertunityPage;