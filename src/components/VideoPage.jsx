import React from "react";
import './videoPage.css';
const VideoPage = () => {
  const videoUrl = "https://drive.google.com/file/d/1TBV4pmbB93OuR3ivDvNpgvg6v6CFSuUX/preview";

  return (
    <div className="video-container">
      <iframe
        src={videoUrl}
        className="video-iframe"
        allow="autoplay"
        title="Google Drive Video"
      ></iframe>
    </div>
  );
};

export default VideoPage;
