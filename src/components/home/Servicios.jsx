import React from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Servicios = () => {
  const services = [
    {
      nombre: "Diseño web",
      propiedad:
        "Utilizamos lo ultimo en tecnología disponible para el diseño de landing pages, sitios web institucionales, e-comerce y catalogo de productos.",
    },
    {
      nombre: "Diseño Responsive",
      propiedad:
        "Nuestros diseños se adaptan a todos los dispositivos móviles: notebooks, tablets, celulares.",
    },
    {
      nombre: "SEO",
      propiedad:
        "Utilizamos un conjunto de estrategias y técnicas de optimización que se hacen que el sitio web aparezca orgánicamente en buscadores de Internet como Google o Youtube.",
    },
    {
      nombre: "Dominio",
      propiedad:
        "Ofrecemos la instalación y configuración de dominios .com y .com.ar, optimizando tu visibilidad global o local en los buscadores, según tus necesidades.",
    },
    {
      nombre: "Hosting",
      propiedad:
        "Te ayudamos a elegir el plan de hosting adecuado para tu sitio web, asesorándote sobre los requisitos técnicos según el hardware de los servidores y tus necesidades específicas.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: {xs:"75%",lg:"65%"},
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignContent: "center",
          paddingY: {xs:"25px",md:"40px"},
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "start",
            fontSize: {
              xs: "2rem",
              md: "4rem",
              // lg: "4rem",
            },
            fontWeight: 700,
            letterSpacing: "2dvh",
            paddingBottom: "2rem",
          }}
        >
          SERVICIOS
        </Typography>
      </Box>
      <Box sx={{width:{xs:'80%',md:'50%', lg:'40%'}, paddingBottom:{xs:'50px',md:'75px'}}}>
        {services.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {item.nombre}
            </AccordionSummary>
            <AccordionDetails>{item.propiedad}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

export default Servicios;
