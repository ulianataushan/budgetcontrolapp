import * as React from "react";

import { Box, Modal, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { EditModalProps } from "../types/editModal";
import MoneyForm from "./MoneyForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({
  option,
  placeholder,
  item,
}: EditModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} size="small" color="primary">
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MoneyForm option={option} placeholder={placeholder} item={item} />
        </Box>
      </Modal>
    </div>
  );
}
