//@ts-nocheck
import React from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllPhotoUrls } from "../../helpers/photos";

const { useState } = React;

interface Props {
  image: string;
  height: string;
  showCarousel?: boolean;
  brightness?: string;
  className?: string;
  overlay?: JSX.Element;
}

export const Image = ({
  image,
  height,
  overlay,
  className = "",
  showCarousel = true,
  brightness = "brightness-100",
}: Props): JSX.Element => {
  const customStyles = {
    content: {
      maxWidth: "800px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      border: 0,
      background: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.50)",
    },
  };

  const [open, setOpen] = useState<boolean>(false);

  const allPhotos = getAllPhotoUrls();

  return (
    <div className={`relative`}>
      <div
        onClick={() => setOpen(true)}
        className={`${height} flex bg-cover w-full justify-center items-center left-0 top-0 ${brightness} ${className}`}
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: "center",
        }}
      />
      {overlay && (
        <div
          className={`${height} flex items-center justify-center text-center brightness-100 text-3xl font-cormorant-garamond text-white`}
        >
          {overlay}
        </div>
      )}
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {showCarousel && (
          <Carousel
            showThumbs={false}
            showIndicators={false}
            dynamicHeight={true}
            transitionTime={0}
            useKeyboardArrows={true}
            autoFocus={true}
          >
            <div>
              <img src={image} />
            </div>
            {allPhotos.map((photo) => (
              <img src={photo} />
            ))}
          </Carousel>
        )}
      </Modal>
    </div>
  );
};
