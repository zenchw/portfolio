import React, { useState } from 'react';
import SocialMediaIcon from './SocialMediaIcon';

function LobbyPage() {
  
  const [imageSrc, setImageSrc] = useState('/lobby/jellyfish.png');
  
  const toggleImage = () => {
    if (imageSrc === '/lobby/jellyfish.png') {
    setImageSrc('/lobby/jellyfish-on.png');
    } else {
    setImageSrc('/lobby/jellyfish.png');
    }
};

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
      <img src="/lobby/wall.png" alt="WALL" 
      style={{
        width: "100%",
        height: "100vh"
      }}/>
      <img src="/lobby/floor.png" alt="FLOOR" 
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0
      }}/>
      <img src={imageSrc} alt="JELLYFISH" 
      style={{
        height: "30%",
        position: "absolute",
        top: 0,
        zIndex: 3
      }}
      onClick={toggleImage}/>

      <div style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        top: "4vh",
        left: "12vw",
      }}>
        <SocialMediaIcon
            icon="/lobby/instagram.png"
            iconClick="/lobby/instagram-click.png"
            url="https://www.instagram.com/zenc.x/"
        />
        <SocialMediaIcon
            icon="/lobby/gmail.png"
            iconClick="/lobby/gmail-click.png"
            url="mailto:xinzenc@gmail.com"
        />
        <SocialMediaIcon
            icon="/lobby/linkedin.png"
            iconClick="/lobby/linkedin-click.png"
            url="https://www.linkedin.com/in/zen-chew-96870a235/"
        />
        <SocialMediaIcon
            icon="/lobby/github.png"
            iconClick="/lobby/github-click.png"
            url="https://twitter.com/yourusername"
        />
      </div>

      {/* <div style={{
        position: "absolute",
        width: "80%",
        height: "30%",
        bottom: 0,
        // left: "30%",
        // transform: "translate(-50%, -50%)", // for true centering
        zIndex: 2
      }}>
      <iframe 
      style={{borderRadius:"12px"}}
      title="My Favourite Songs"
      src="https://open.spotify.com/embed/playlist/6M2qkTvLjEU0azlbyogwTg?utm_source=generator"
      width="30%" height="100%"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
      </div> */}
    </div>
  );
}

export default LobbyPage;