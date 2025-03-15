import React from "react";
import ImageCard from "./ImageCard";
import "../styles.css";

const images = [
  { id: 1, src: "/images/image1.jpg", title: "Mountains" },
  { id: 2, src: "/images/image2.jpg", title: "Sunset" },
  { id: 3, src: "/images/image3.jpg", title: "Snow" },
  { id: 4, src: "/images/image4.jpg", title: "Night" },
];

function Gallery() {
  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard key={img.id} src={img.src} title={img.title} />
      ))}
    </div>
  );
}

export default Gallery;
