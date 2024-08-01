import {
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import data from "../constant/data";
import { CurrencyRupee } from "@mui/icons-material";
import plotSize from "../assets/plotSize.png";
import aqure from "../assets/aqure.png";
import MenuBook from "@mui/icons-material/MenuBook";
import Pets from "@mui/icons-material/Pets";
import Pool from "@mui/icons-material/Pool";
import HolidayVillage from "@mui/icons-material/HolidayVillage";
import Forest from "@mui/icons-material/Forest";
import DirectionsWalk from "@mui/icons-material/DirectionsWalk";
import DirectionsBike from "@mui/icons-material/DirectionsBike";
import Sports from "@mui/icons-material/Sports";

const RightContentDialog = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const iconMap = {
    MenuBook: MenuBook,
    Pets: Pets,
    Pool: Pool,
    HolidayVillage: HolidayVillage,
    Forest: Forest,
    DirectionsWalk: DirectionsWalk,
    DirectionsBike: DirectionsBike,
    Sports: Sports,
  };

  const Amenties = [
    {
      key: 1,
      name: "Children's Liberary",
      iconName: "MenuBook",
    },
    {
      key: 2,
      name: "Pet Park",
      iconName: "Pets",
    },
    {
      key: 8,
      name: "Heated Pool",
      iconName: "Pool",
    },
    {
      key: 3,
      name: "Ampitheare",
      iconName: "HolidayVillage",
    },
    {
      key: 4,
      name: "Tree Museum",
      iconName: "Forest",
    },
    {
      key: 5,
      name: "Jogging track",
      iconName: "DirectionsWalk",
    },
    {
      key: 6,
      name: "Cycling track",
      iconName: "DirectionsBike",
    },
    {
      key: 7,
      name: "Basket ball,volley ",
      iconName: "Sports",
    },
  ];

  const trimmedText = `${data?.about_project?.substring(0, 380)}...`;

  return (
    <>
      <Grid container spacing={2} minWidth={"400px"}>
        {/* image logo */}
        <Grid item textAlign="center">
          <img
            src="https://api.plots360.com/images/1718890658707-Embassy.svg"
            alt="photo"
            style={{ width: "91px", height: "55px" }}
          />
          {/* project name */}
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "1.2",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {data?.project_name}
          </Typography>
          {/* project about*/}
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "18px",
              color: "#707070",
              fontWeight: 300,
              textAlign: "justify",
            }}
          >
            {expanded ? data?.about_project : trimmedText}{" "}
            <Button
              sx={{
                fontSize: "12px",
                color: "#b27e02",
                textTransform: "none",
                padding: 0,
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={toggleExpand}
            >
              {expanded ? "View Less" : "View More"}
            </Button>
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Grid container spacing={2} justifyContent="center">
                {/* rupee */}
                <Grid item xs={12} sm={4}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <CurrencyRupee style={{ color: "rgb(178, 126, 2)" }} />
                    <Stack>
                      <Typography variant="body1" sx={{ color: "#b27e02" }}>
                        Base Price
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          lineHeight: "1.2",
                          fontWeight: 500,
                          textAlign: "left",
                        }}
                      >
                        7525/SFT
                      </Typography>
                    </Stack>

                    {!isSmallScreen && (
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginLeft: 1 }}
                      />
                    )}
                  </Stack>
                </Grid>
                {/* plot size */}
                <Grid item xs={12} sm={4}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <img
                      src={plotSize}
                      alt="photo"
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "transparent",
                      }}
                    />
                    <Stack>
                      <Typography variant="body1" sx={{ color: "#b27e02" }}>
                        Plot Size
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          lineHeight: "1.2",
                          fontWeight: 500,
                          textAlign: "left",
                        }}
                      >
                        2,100 - 12,000
                      </Typography>
                    </Stack>
                    {!isSmallScreen && (
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginLeft: 1 }}
                      />
                    )}
                  </Stack>
                </Grid>
                {/* area */}
                <Grid item xs={12} sm={4}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <img
                      src={aqure}
                      alt="photo"
                      style={{
                        width: "35px",
                        height: "35px",
                        color: "transparent",
                      }}
                    />
                    <Stack>
                      <Typography variant="body1" sx={{ color: "#b27e02" }}>
                        Area
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          lineHeight: "1.2",
                          fontWeight: 500,
                          textAlign: "left",
                        }}
                      >
                        288 Acres
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
              <Grid container spacing={2} justifyContent="center">
                {/* total units */}
                <Grid item xs={12} sm={4}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Stack>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        Total Units
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          lineHeight: "1.2",
                          fontWeight: 500,
                        }}
                      >
                        950
                      </Typography>
                    </Stack>
                    {!isSmallScreen && (
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginLeft: 1 }}
                      />
                    )}
                  </Stack>
                </Grid>
                {/* project size */}
                <Grid item xs={12} sm={4}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Stack>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        Project Size
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          lineHeight: "1.2",
                          fontWeight: 500,
                          textAlign: "left",
                        }}
                      >
                        Township
                      </Typography>
                    </Stack>
                    {!isSmallScreen && (
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginLeft: 1 }}
                      />
                    )}
                  </Stack>
                </Grid>
                {/* status */}
                <Grid item xs={12} sm={4}>
                  <Stack direction={"row"} alignItems={"center"} gap={1}>
                    <Stack>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        Status
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          lineHeight: "1.2",
                          fontWeight: 500,
                          textAlign: "left",
                        }}
                      >
                        Ready to move
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
              <br />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "1.5rem",
                  textAlign: "center",
                }}
              >
                30+ Amenities
              </Typography>
              <br />

              <Grid container spacing={2} justifyContent="center">
                {Amenties?.map((item, index) => {
                  const Icon = iconMap[item.iconName];
                  return (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Stack direction={"row"} gap={1} alignItems="center">
                        {Icon && <Icon />}
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          {item?.name}
                        </Typography>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            {/* map showing for longitude */}
            <Grid item xs={12} md={4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31074.879659154274!2d77.624164!3d13.202703000000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDEyJzA5LjciTiA3N8KwMzcnMjcuMCJF!5e0!3m2!1sen!2sus!4v1722412547021!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 15 }}
            marginTop={5}
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="outlined" color="primary">
              Chat Now
            </Button>
            <Button variant="outlined" color="primary">
              Call Now
            </Button>
            <Button variant="outlined" color="primary">
              Schedule Site
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default RightContentDialog;
