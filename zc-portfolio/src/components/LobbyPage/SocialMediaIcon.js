import React, { useState } from 'react';

const SocialMediaIcon = ({ icon, iconClick, url }) => {
  const [iconSrc, setIconSrc] = useState(icon);

  const handleMouseEnter = () => {
    setIconSrc(iconClick);
  };

  const handleMouseLeave = () => {
    setIconSrc(icon);
  };

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <img 
      src={iconSrc} 
      alt="Social Media Icon" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer', width: '30%', height: '30%' }}
    />
  );
}

export default SocialMediaIcon;
