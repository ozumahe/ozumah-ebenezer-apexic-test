import React from "react";
import Modal from "react-modal";
import { setIsProductDetailsOpen } from "../global/redux-functionality/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../global/redux-functionality";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import { CloseIcon, Hamburger, Logo } from "./SVGS";

import "../styles/product-details.scss";

const customStyles = {
  overlay: { background: "rgba(0, 0, 0, 0.40)" },
  content: {
    borderRadius: "8px",
    padding: "40px",
    maxWidth: "684px",
    minHeight: "616px",
    width: "100%",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
  },
};

Modal.setAppElement("#root");

function ProductDetailsModal() {
  const dispatch = useDispatch<AppDispatch>();
  const { isProductDetailsOpen, selectedProduct } = useSelector(
    (state: RootState) => state.products
  );
  const { matchesAll } = useMediaQueries({
    screen: "screen",
    width: "(min-width: 700px)",
  });

  const handleClose = () => dispatch(setIsProductDetailsOpen(false));

  return (
    <Modal
      isOpen={isProductDetailsOpen}
      onRequestClose={handleClose}
      style={{
        overlay: { background: "rgba(0, 0, 0, 0.40)" },
        content: {
          borderRadius: "8px",
          padding: "40px",
          maxWidth: "684px",
          height: matchesAll ? "fit-content" : "100vh",
          width: "100%",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          //   overflowY: "scroll",
        },
      }}
    >
      <div className="nav">
        <Logo />

        <button className="menu-button">
          <Hamburger />
        </button>
      </div>
      <div className="container">
        <div className="header">
          <p className="name">{selectedProduct?.product}</p>

          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="content">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Imag"
            />
          </div>
          <div className="details-container">
            <p className="title">Key Features</p>

            <ul>
              <li>2.6 GHz Intel Core i7 6-Core (9th Gen)</li>
              <li>16GB of 2666 MHz DDR4 RAM | 8TB SSD</li>
              <li>16" 3072 x 1920 Retina Display</li>
              <li>AMD Radeon Pro 5600M GPU (8GB HBM2)</li>
            </ul>

            <p className="description">
              The Apple 16" MacBook Pro features a 16" Retina Display, a Magic
              Keyboard with a redesigned scissor mechanism, a six-speaker
              high-fidelity sound system, and an advanced thermal design. This
              MacBook Pro also features an AMD Radeon Pro 5600M graphics card, a
              7nm mobile discrete GPU designed for pro users. With 8GB of HBM2
            </p>
          </div>
        </div>
        <div className="footer">
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
}

export default ProductDetailsModal;
