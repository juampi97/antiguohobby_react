import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, Divider } from '@mui/material';
import { NavLink } from "react-router-dom";

const CartaServicios = ({ service, index }) => {

  const link = "https://api.whatsapp.com/send/?phone=541162102695&text&type=phone_number&app_absent=0"

  const handleOpenLink = (event) => {
    event.preventDefault();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: '5px',
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '455px', // Asegura que todas las cards tengan la misma altura
      }}
    >
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Título con color condicional */}
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ color: index % 2 === 0 ? 'black' : '#F0941F' }}
        >
          {service.title}
        </Typography>

        {/* Lista de características con flexGrow para ocupar espacio disponible */}
        <List sx={{ flexGrow: 1 }}>
          {Object.keys(service)
            .filter((key) => key.startsWith('caracteristica'))
            .map((key, idx, arr) => (
              <React.Fragment key={idx}>
                <ListItem sx={{ justifyContent: 'center' }}>
                  <Typography>{service[key]}</Typography>
                </ListItem>
                {idx < arr.length - 1 && <Divider />}
              </React.Fragment>
            ))}
        </List>
      </CardContent>

      {/* Botón alineado al fondo */}
      <Button component={NavLink} to="#" onClick={handleOpenLink}
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          borderRadius: 0,
          mt: 'auto', // Empuja el botón hacia abajo si la card es más grande
        }}
      >
        Contratar
      </Button>
    </Card>
  );
};

export default CartaServicios;
