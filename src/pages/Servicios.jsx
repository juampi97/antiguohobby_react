import React from 'react';
import { NavLink } from 'react-router-dom';
import BannerContainer from '../components/banner/BannerContainer';
import { Box, Container } from '@mui/material';
import CartaServicios from '../components/CartaServicios';
import Slider from 'react-slick';

import PreguntasFrecuentes from "../components/servicios/PreguntasFrecuentes";


const Servicios = () => {
  const sourceImg = '/images/servicio/main.jpg';
  const heighBanner = '85vh';
  const title = 'NUESTROS PLANES';
  const subtitle = 'Conoce los precios para diseñar tu sitio web';

  const services = [
    {
      title: 'LANDING PAGE',
      caracteristica1: 'Sitio de una sola página',
      caracteristica2: 'Diseño responsive - adaptable a todos los dispositivos',
      caracteristica3: 'Formulario de contacto',
      caracteristica4: 'Correo con nombre de la marca',
      caracteristica5: 'Logo Whatsapp flotante',
      caracteristica6: 'No incluye dominio ni hosting',
    },
    {
      title: 'SITIO WEB BASICO',
      caracteristica1: 'Sitio de hasta 4 páginas',
      caracteristica2: 'Diseño responsive - adaptable a todos los dispositivos',
      caracteristica3: 'Formulario de contacto',
      caracteristica4: 'Correo con nombre de la marca',
      caracteristica5: 'Logo Whatsapp flotante',
      caracteristica6: 'No incluye dominio ni hosting',
    },
    {
      title: 'SITIO WEB PROFESIONAL',
      caracteristica1: 'Sitio de hasta 6 páginas',
      caracteristica2: 'Diseño responsive - adaptable a todos los dispositivos',
      caracteristica3: 'Catálogo de productos',
      caracteristica4: 'Formulario de contacto',
      caracteristica5: 'Correo con nombre de la marca',
      caracteristica6: 'Logo Whatsapp flotante',
      caracteristica7: 'No incluye dominio ni hosting',
    },
    {
      title: 'E-COMERCE',
      caracteristica1: 'Sitio de hasta 8 páginas',
      caracteristica2: 'Diseño responsive - adaptable a todos los dispositivos',
      caracteristica3: 'Catálogo de productos. Gestion de pedidos y venta online',
      caracteristica4: 'Formulario de contacto',
      caracteristica5: 'Correo con nombre de la marca',
      caracteristica6: 'Logo Whatsapp flotante',
      caracteristica7: 'No incluye dominio ni hosting',
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          mx: '0px !important',
          padding: '0px !important',
          overflow: 'hidden',
        }}
      >
        <BannerContainer sourceImg={sourceImg} heighBanner={heighBanner} title={title} subtitle={subtitle} />
      </Container>
      <Container
        maxWidth={false}
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          mx: '0px !important',
          padding: '0px !important',
          overflow: 'hidden',
          backgroundColor: "#e5e5e5"
        }}
      >
        <Box sx={{ width: '75%', paddingY: '50px' }}>
          <Slider {...settings}>
            {services.map((service, index) => (
              <CartaServicios key={index} service={service} index={index} />
            ))}
          </Slider>
        </Box>
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
                overflow: "hidden"
              }}
      >
        <PreguntasFrecuentes />
      </Container>
    </>
  );
};

export default Servicios;
