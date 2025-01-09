import React from "react";
import { NavLink } from "react-router-dom";
import BannerContainer from "../components/banner/BannerContainer";
import { Box, Container } from "@mui/material";
import Carta from "../components/Carta";

const Proyectos = () => {
  const sourceImg = "/images/proyectos/main.jpg";
  const heighBanner = "85vh";
  const title = "NUESTROS PROYECTOS";
  const subtitle = "Estos son algunos de los proyectos en los que trabajamos";

  const proyects = [
    {
      image: "/images/proyectos/acuaponiar.jpg",
      title: "Acuaponiar",
      description:
        "Sitio web institucional desarrollado para la empresa acuaponiAR.",
      link: "https://juampi97.github.io/calabro_acuaponia/index.html",
    },
    {
      image: "/images/proyectos/damat.jpg",
      title: "Dmat",
      description: "Sitio web institucional desarrollado para la empresa Dmat.",
      link: "https://juampi97.github.io/dmat/",
    },
    {
      image: "/images/proyectos/trym.jpg",
      title: "Trym",
      description: "Sitio web institucional desarrollado para la empresa Trym.",
      link: "https://juampi97.github.io/trym/",
    },
  ];

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
          display: "flex",
          justifyContent: "center",
          mx: "0px !important",
          padding: "0px !important",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "75%",
            paddingY: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {proyects.map((proyect, index) => (
            <Carta
              key={index}
              image={proyect.image}
              title={proyect.title}
              description={proyect.description}
              link={proyect.link}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Proyectos;
