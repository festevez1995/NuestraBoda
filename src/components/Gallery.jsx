import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../components/Gallery.css";

const images = [
  "/public/engagement_photos/reyna_fer_0.jpg",
  "/public/engagement_photos/reyna_fer_1.jpg",
  "/public/engagement_photos/reyna_fer_2.jpg",
  "/public/engagement_photos/reyna_fer_3.jpg",
  "/public/engagement_photos/reyna_fer_4.jpg",
  "/public/engagement_photos/reyna_fer_5.jpg",
  "/public/engagement_photos/reyna_fer_6.jpg",
  "/public/engagement_photos/reyna_fer_7.jpg",
  "/public/engagement_photos/reyna_fer_8.jpg",
  "/public/engagement_photos/reyna_fer_9.jpg",
  "/public/engagement_photos/reyna_fer_10.jpg",
  "/public/engagement_photos/reyna_fer_11.jpg",
  "/public/engagement_photos/reyna_fer_12.jpg",
  "/public/engagement_photos/reyna_fer_13.jpg",
  "/public/engagement_photos/reyna_fer_14.jpg",
  "/public/engagement_photos/reyna_fer_15.jpg",
  "/public/engagement_photos/reyna_fer_16.jpg",
  "/public/engagement_photos/reyna_fer_17.jpg",
  "/public/engagement_photos/reyna_fer_18.jpg",
  "/public/engagement_photos/reyna_fer_19.jpg",
  "/public/engagement_photos/reyna_fer_20.jpg",
  "/public/engagement_photos/reyna_fer_21.jpg",
  "/public/engagement_photos/reyna_fer_22.jpg",
  "/public/engagement_photos/reyna_fer_23.jpg",
  "/public/engagement_photos/reyna_fer_24.jpg",
];

function Gallery() {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            zIndex: 9999,
          }}
          onClick={() => setData({ img: "", i: 0 })}
        >
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
      <div className="Gallery-container" style={{ padding: "10px" }}>
        <h3 style={{ textAlign: "center", padding: "30px" }}>Galería</h3>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Gallery;
