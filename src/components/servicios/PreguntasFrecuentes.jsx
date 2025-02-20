import React from "react";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PreguntasFrecuentes = () => {
  const services = [
    {
      nombre: "¿Qué necesito para hacer el sitio web?",
      propiedad:
        "En lo posible necesitamos que nos provean los textos e imágenes para agilizar el proceso y disminuir el tiempo de preparación.",
    },
    {
      nombre: "¿Cuánto demora?",
      propiedad:
        "Una landing page o un sitio web basico tiene una demora estimada de una semana. Un sitio web profesional o un e-comerce tiene una demora estimada de entre dos semanas a un mes.",
    },
    {
      nombre: "¿Cuáles son los medios de pago?",
      propiedad:
        "Podés pagar con tarjeta de crédito o débito a través de Mercado Pago, con dinero en cuenta de Mercado Pago o hacer una transferencia bancaria.",
    },
    {
      nombre: "¿Cómo me contacto?",
      propiedad:
        "Podes escribirnos por medio del formulario de contacto, mail o whatsapp. Nos comunicaremos a la brevedad. Tambien podemos coordinar una videollamada para analisis de proyectos y responder dudas.",
    }
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
          paddingY: {xs:"25px",md:"40px"}
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

export default PreguntasFrecuentes;
