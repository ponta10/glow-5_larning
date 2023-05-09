import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


export const BasicModal = ({ open, setOpen, children, size }) => {
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: size,
    bgcolor: "background.paper",
    boxShadow: 12,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

BasicModal.defaultProps = { size: 400 };