//@ts-nocheck
import React from "react";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { getAllPhotoUrls } from "../../helpers/photos";

const { useState } = React;

interface Props {
  image: string;
  className: string;
  children?: JSX.Element;
}

export const Image = (props: Props): JSX.Element => {
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
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.50)",
    },
  };

  const [open, setOpen] = useState<boolean>(false);

  const allPhotos = getAllPhotoUrls(1, 4);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={props.className}
        style={{
          backgroundImage: `url('${props.image}')`,
          backgroundPosition: "center",
        }}
      >
        {props.children}
      </div>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Carousel dynamicHeight>
          <div>
            <img src={props.image} />
          </div>
          {allPhotos.map((photo) => (
            <img src={photo} />
          ))}
        </Carousel>
      </Modal>
    </>
  );
};
