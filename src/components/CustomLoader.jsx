import { CircularProgress, Dialog } from "@mui/material";
import React from "react";

const CustomLoader = ({ show }) => {
  return (
    <Dialog open={show}>
      <CircularProgress size={30} sx={{ m: 2 }} />
    </Dialog>
  );
};

export default CustomLoader;
