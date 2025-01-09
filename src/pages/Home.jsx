import React from "react";
import BannerContainer from "../components/banner/BannerContainer";
import Nosotros from "../components/home/Nosotros";
import Servicios from "../components/home/Servicios";
import { Container, Box } from "@mui/material";

const Home = () => {
  const sourceImg = "/images/index/fondo_1.jpg";
  const heighBanner = "100vh";
  const title = "DESARROLLO WEB";
  const subtitle = "Especialistas en diseños web profesionales";

  return (
    <>
      <Container
        maxWidth={false} 
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          mx: "0px !important",
          padding: "0px !important",
          overflow: "hidden",
        }}
      >
        <BannerContainer
          sourceImg={sourceImg}
          heighBanner={heighBanner}
          title={title}
          subtitle={subtitle}
        />
      </Container>
      <Container
              maxWidth={false} 
              sx={{
                width: "100vw",
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                mx: "0px !important",
                padding: "0px !important",
                overflow: "hidden",
              }}
      >
        <Nosotros />
      </Container>
      <Container
              maxWidth={false} 
              sx={{
                width: "100vw",
                minHeight: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyItems:'start',
                alignItems:'center',
                mx: "0px !important",
                padding: "0px !important",
                overflow: "hidden",
              }}
      >
        <Servicios />
      </Container>
    </>
  );
};

export default Home;
