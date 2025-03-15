import React from "react";

function ImageCard({ src, title }) {
  return (
    <div className="image-card">
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default ImageCard;
