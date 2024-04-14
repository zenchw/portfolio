import React from 'react';

function MNightPage() {
  return(
    <div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        margin: "0",
        padding: "0",
        position: "relative",
        overflow: "hidden",
    }}>
      <img src="/almost-never/animated-logo.gif" alt="Animated MNight '23 Logo" 
      style={{
        width: "70%",
      }}/>
    </div>
  );
}

export default MNightPage;