import { LoadingButton } from "@mui/lab";
import { DialogContent, Grid, Typography } from "@mui/material";
import React from "react";
import CommonDialog from "../components/CommonDialog";
import RightContentDialog from "../components/RightContentDialog";
import LeftContentDialog from "../components/LeftContentDialog";

const SlideDialog = () => {
  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <CommonDialog open={show} onClose={handleClose} title="View">
        <DialogContent>
          <Grid container spacing={1}>
            {/* left photo  */}
            <LeftContentDialog />
            {/* right content */}
            <Grid item xs={7}>
              <RightContentDialog />
            </Grid>
          </Grid>
        </DialogContent>
      </CommonDialog>

      {/* button showing dialog */}
      <Grid container>
        <Grid item xs={12} alignItems={"center"}>
          <Typography variant="h2" textAlign={"center"}>
            Welcome to react custom components
          </Typography>
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <LoadingButton
            onClick={handleShow}
            variant="contained"
            color="secondary"
            size="large"
            sx={{ textTransform: "capitalize" }}
          >
            View
          </LoadingButton>
        </Grid>
      </Grid>
    </>
  );
};

export default SlideDialog;
