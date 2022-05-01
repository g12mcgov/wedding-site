import React from "react";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { Modal } from "react-modal-overlay";
import "react-modal-overlay/dist/index.css";

const { useState } = React;

const images = [
  { source: "path/to/image-1.jpg" },
  { source: "path/to/image-2.jpg" },
];

export const MyCarousel = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button onClick={() => setOpen(true)} className="button">
          Hook Modal!
        </button>
      </div>
      <Modal show={open} closeModal={() => setOpen(false)}>
        <h4> here is hooks modal data </h4>
      </Modal>
    </>
  );
};
