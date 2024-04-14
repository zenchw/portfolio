import React, { useState, useEffect, useRef } from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import './LobbyPage.css';

function LobbyPage() {
  
  // Next room
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleClick = () => {
    setLoading(true);
  };
  
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    if (loading) {
      setFadeClass('fade-in');
      const timer = setTimeout(() => {
        setTimeout(() => {
          setFadeClass('fade-out');
          navigate('/ottertunity');
        });
      }, 6700);
  
      return () => clearTimeout(timer);
    }
  }, [loading, navigate]);
  

  // Toggle jellyfish ceiling light
  const [imageSrc, setImageSrc] = useState('/lobby/jellyfish.png');
  
  const toggleImage = () => {
    setImageSrc(prevImageSrc => 
      prevImageSrc === '/lobby/jellyfish.png' ? '/lobby/jellyfish-on.png' : '/lobby/jellyfish.png'
    );
  };

  // Cat
  const catImageRef = useRef(null);

  const handleMouseEnter = () => {
    catImageRef.current.src = '/lobby/hover-cat.gif';
  };

  const handleMouseLeave = () => {
    catImageRef.current.src = '/lobby/sleepy-cat.gif';
  };

  const handleAnimationEnd = () => {
    catImageRef.current.src = '/lobby/sleepy-cat.gif';
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
        backgroundColor: "black",
    }}>
      {loading ? (
        <div style={{ padding: '3vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img src="next-room.gif" alt="Loading..."
          className={fadeClass}
          style={{
            maxWidth: "80%",
            maxHeight: "80vh",
            width: "auto",
            height: "auto",
            marginBottom: "3%",
          }}/>
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "3%",
            bottom: 0,
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
                url="https://github.com/zenchw"
            />
          </div>
        </div>
      ) : (
        <>
          {/* WALL */}
          <img src="/lobby/wall.png" alt="WALL" 
          style={{
            width: "100%",
            height: "100vh"
          }}/>
          {/* FLOOR */}
          <img src="/lobby/floor.png" alt="FLOOR" 
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0
          }}/>
          {/* CAT */}
          <img
            ref={catImageRef}
            src="/lobby/sleepy-cat.gif"
            alt="Cat"
            style={{
              cursor: 'pointer',
              position: 'absolute',
              bottom: '40px',
              right: '18%',
              maxWidth: '20vw'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onAnimationEnd={handleAnimationEnd}
          />
          {/* JELLYFISH */}
          <img src={imageSrc} alt="JELLYFISH" 
          style={{
            cursor: 'pointer',
            maxHeight: "35%",
            maxWidth: "20vw",
            position: "absolute",
            top: 0
          }}
          onClick={toggleImage}/>
          {/* DOOR */}
          <img
            src="/logo512.png"
            alt="Go to About Me"
            onClick={handleClick}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              width: '10%',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </>
      )}
    </div>
  );
}

export default LobbyPage;
