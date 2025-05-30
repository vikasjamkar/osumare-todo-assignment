import React from "react";
import { Modal } from "react-bootstrap";

const CustomModal = ({
  title = "",
  children,
  show = false,
  onClose = () => {},
  showCloseBtn = true,
  subTitle = "",
  size = "md", 
}) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={false}
      size={size}
    >
      {title && (
        <>
          <Modal.Header closeButton={showCloseBtn} className="border-0 px-5 pt-5">
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          {subTitle && <p className="px-5 mb-0">{subTitle}</p>}
        </>
      )}

      <Modal.Body className="px-5">{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
