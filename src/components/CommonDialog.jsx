import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Transition from "./Transition";

const CommonDialog = ({
  open = false,
  onClose = () => {},
  minWidth = "400px",
  title = "Title",
  children,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{
        sx: { minWidth: { xs: "98%", md: "80%" } },
      }}
    >
      <DialogTitle sx={{ p: "0 !important" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 1, px: 2 }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: 600 }}
            color="primary"
          >
            {title}
          </Typography>
          <Box
            onClick={onClose}
            sx={{
              cursor: "pointer",
              height: "25px",
              width: "25px",
              border: "2px solid #0C2F49",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Close sx={{ color: "#0C2F49" }} />
          </Box>
        </Stack>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export default CommonDialog;
