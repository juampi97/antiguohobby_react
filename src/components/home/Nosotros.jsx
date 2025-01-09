import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Nosotros = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: { xs: "150vh",sm:'90vh' },
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            minHeight: { xs: "50%", lg: "100%" },
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "20px",
            backgroundColor: "#1c1b19",
            color: "#e5e5e5",
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: "85%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: "end",
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
              NOSOTROS
            </Typography>
            {[
              "Desarrollo",
              "Dominios",
              "Hosting",
              "Marketing",
              "Mantenimiento",
            ].map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  textAlign: "end",
                  fontSize: {
                    xs: "2rem",
                    md: "4rem",
                    // lg: "4rem",
                  },
                  fontWeight: 200,
                  letterSpacing: "1dvh",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#F0941F",
                    color: "#1c1b19",
                    cursor: "pointer",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            height: { xs: "50%", lg: "100%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            padding: "20px",
            backgroundColor: "#e5e5e5",
            color: "#1c1b19",
          }}
        >
          <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
            <Typography
              variant="body1"
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                  // lg: "4rem",
                },
                lineHeight:{xs:'1.5',sm:'2'},
                paddingBottom:'20px'
              }}
              >
              Somos una empresa especializada en el diseño y desarrollo de sitios web personalizados para empresas y particulares. Nuestro equipo de expertos en diseño web, desarrollo y marketing digital se encarga de crear sitios web modernos y funcionales que destacan entre la competencia.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "start",
                fontSize: {
                  xs: "1rem",
                  md: "1.25rem",
                  // lg: "4rem",
                },
                lineHeight:{xs:'1.5',sm:'2'},
                paddingBottom:'20px'
              }}
            >
              En AntiguoHobby, nos enfocamos en proporcionar a nuestros clientes un servicio excepcional y resultados de alta calidad. Si está buscando una empresa de desarrollo web confiable y profesional, ¡contáctenos hoy mismo!
            </Typography>
            <Box sx={{ display:'flex', justifyContent:'space-around' }}>
              <Button component={NavLink} to={'/contacto'} variant="contained" sx={{width:'200px', height:'50px', backgroundColor:'#F0941F !important', "&:hover": {backgroundColor: "#363432 !important"}}}>Contactenos</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Nosotros;
