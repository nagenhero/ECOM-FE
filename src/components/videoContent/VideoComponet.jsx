import React from "react";
import video from "../../assets/video1.mp4";

export const VideoComponent = () => {
  return (
    <div className="main1">
      <video src={video} autoPlay loop muted />
    </div>
  );
};
