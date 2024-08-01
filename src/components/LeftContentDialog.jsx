import React from "react";
import { Grid, Typography } from "@mui/material";
import image1 from "../assets/Mask group.png";
import img2 from "../assets/419CF.png";
import img3 from "../assets/75AC6.png";
import Swipper from "./Swipper";

const LeftContentDialog = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = [image1, img2, img3];

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
      <Swipper currentIndex={currentIndex} />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid container gap={1} justifyContent={"center"}>
            {images.map((image, index) => (
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                lg={4}
                xl={4}
                key={index}
                sx={{ cursor: "pointer" }}
              >
                <img
                  onClick={() => handleThumbnailClick(index)}
                  src={image}
                  alt="thumbnail"
                  height={"140px"}
                  width={"140px"}
                  // style={{
                  //   border: currentIndex === index ? "2px solid blue" : "none",
                  // }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LeftContentDialog;
